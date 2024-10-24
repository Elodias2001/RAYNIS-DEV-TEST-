/* eslint-disable camelcase */
export const usePostsStore = defineStore('Posts', {
  state: () => ({
    items: [],
    itemsLibs: [],
    item: {},
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 10,
    loading: false,
    errors: {},
    statusOp: false,
  }),
  getters: {
    getItem: state => state.item,
    getStatusOp: state => state.statusOp,
  },
  actions: {
    async getItems({ q = '', statut = null, sortBy, orderBy, itemsPerPage = 10, page = 1 } = {}) {
      // const authStore = useAuthStore()
      const searchQuery = q ? q.toLowerCase() : ''
      const sortByLocal = sortBy || ''
      const orderByLocal = orderBy || ''
      const itemsPerPageLocal = Number(itemsPerPage)
      const pageLocal = Number(page)

      try {
        const response = await $fetch('https://jsonplaceholder.typicode.com/todos')

        console.log('Posts', response)
        
        let filteredItems = response

        
        filteredItems = filteredItems.filter(element => {
          const title = typeof element.title === 'string' ? element.title.toLowerCase() : ''
              
          return (title.includes(searchQuery) || model_categ.includes(searchQuery)) && (statut === null || element.statut === statut)
        })
    
        if (sortByLocal) {
          filteredItems.sort((a, b) => {
            const order = orderByLocal === 'asc' ? 1 : -1
            if (sortByLocal === 'title') return order * a.title.localeCompare(b.title)
            if (sortByLocal === 'created_at') return order * (new Date(a.created_at) - new Date(b.created_at))
            if (sortByLocal === 'updated_at') return order * (new Date(a.updated_at) - new Date(b.updated_at))
                
            return 0
          })
        }
    
        const totalItems = filteredItems.length
    
        const start = (pageLocal - 1) * itemsPerPageLocal
        const paginatedItems = filteredItems.slice(start, start + itemsPerPageLocal)
        const totalPages = Math.ceil(totalItems / itemsPerPageLocal)
    
        this.items = paginatedItems
        this.totalItems = totalItems
        this.totalPages = totalPages
        this.currentPage = pageLocal > totalPages ? 1 : pageLocal
        this.itemsPerPage = itemsPerPageLocal
            
      } catch (error) {
        // alert("erreur")
        console.error('Échec de la récupération des items :', error)
      }
    },
    
    async storeItem(dataSaving, notification) {
      this.loading = true
      try {
        const response = await $fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify(dataSaving),
          headers: { 'Content-Type': 'application/json' },
        })
        
        if (response) {
          this.statusOp = true

          // await this.getItems() 
          this.items.push(response)
          await notification.resolve({
            title: "Todo",
            message: "L'élément a été ajouté avec succès !",
          })
        }
      } catch (error) {
        await this.handleErrors(error, notification)
      } finally {
        this.loading = false
      }
    },

    async getItemById(id) {
      this.loading = true    
      try {
        const response = await $fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        
        this.item = response
        
        return response
      } catch (error) {
        await this.handleErrors(error)
      } finally {
        this.loading = false
      }
    },

    async updateItem(id, savingData, notification) {
      this.loading = true
      try {
        const response = await $fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: 'PUT',
          body: JSON.stringify(savingData),
          headers: { 'Content-Type': 'application/json' },
        })

        if (response) {
          this.statusOp = true


          // await this.getItems()
          
          const itemIndex = this.items.findIndex(item => item.id === id)
      
          
          if (itemIndex !== -1) {
            this.items[itemIndex] = response
          }
          await notification.resolve({
            title: "Todo",
            message: "L'élément a été mis à jour avec succès !",
          })
        }
      } catch (error) {
        await this.handleErrors(error, notification)
      } finally {
        this.loading = false
      }
    },

    async deleteItem(id, notification) {
      this.loading = true
      try {
        const response = await $fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: 'DELETE',
        })

        if (response) {
          this.statusOp = true

          // await this.getItems()
          this.items = this.items.filter(item => item.id !== id)

          await notification.resolve({
            title: "Todo",
            message: "L'élément a été supprimé avec succès !",
          })
        }
      } catch (error) {
        await this.handleErrors(error, notification)
      } finally {
        this.loading = false
      }
    },

    async handleErrors(error, notification) {
      if (error.message && (error.message.includes("Failed to fetch") || error.message.includes("ERR_CONNECTION_REFUSED"))) {
        await notification.reject({
          title: "Todo",
          message: "Impossible d'accéder au serveur. Veuillez vérifier votre connexion réseau ou réessayer plus tard.",
        })
      } else {
        await notification.reject({
          title: "Todo",
          message: "Une erreur est survenue. Veuillez réessayer plus tard.",
        })
      }
    },
  },
})
    