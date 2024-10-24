<template>
  <div class="space-y-5">
    <div class="relative mx-auto max-w-[400px] rounded-md border border-slate-50 bg-white p-4 text-sm shadow-lg">
      <button class="top-4 absolute right-4 mx-auto text-slate-500 hover:text-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
      <div class="flex space-x-4">
        <div class="relative h-10 w-10">
          <img
            class="h-full w-full rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          >
          <span class="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-400 ring ring-white" />
        </div>
        <div class="flex-1">
          <h4 class="px-6 font-medium text-slate-900">
            Taylor Swift <span class="mx-2 font-normal text-slate-500">5 min ago</span>
          </h4>
          <div class="mt-1 text-slate-500">
            Your team has made changes to your company profile since you last logged in.
          </div>
          <div class="mt-2 flex space-x-4">
            <button class="inline-block font-medium leading-loose text-slate-500 hover:text-slate-900">
              Dismiss
            </button>
            <button class="inline-block font-medium leading-loose text-blue-600 hover:text-blue-700">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      type: 'info',
      props: {
        avatarUrl: '',
        profileUrl: '',
      },
      message: '',
      ariaRole: 'alert',
      ariaLive: 'assertive',
      clear: () => {},
    }),
  },
})

const getNotificationStyle = type => {
  switch (type) {
  case 'success':
    return 'border-green-500 bg-green-50'
  case 'error':
    return 'border-red-500 bg-red-50'
  case 'warning':
    return 'border-yellow-500 bg-yellow-50'
  case 'info':
    return 'border-blue-500 bg-blue-50'
  default:
    return 'border-gray-500 bg-gray-50'
  }
}
</script>

<style scoped>
.wrapper {
  transition: all 0.3s ease;
}

.wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.content {
  overflow-wrap: break-word;
}
</style>

<!--
  await push.error({
  title: "Connexion",
  message: error.response["_data"].data.failed,
  props: {
  avatarUrl: 'https://i.pravatar.cc/300',
  profileUrl: 'https://github.com/smastrom',
  },
  }) 
-->

<!--
  <script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
  item: Object, 
  })

  console.log(props.item) 
  </script>

  <template>
  <div
  class="Wrapper"
  :data-notification="item.type"
  >
  <img :src="item.props.avatarUrl">

  <div class="Content">
  <p
  :role="item.ariaRole"
  :aria-live="item.ariaLive"
  aria-atomic="true"
  >
  {{ item.message }}
  </p>
  <a
  v-if="item.type === 'success'"
  :href="item.props.profileUrl"
  >
  View Profile
  </a>
  </div>

  <button @click="item.clear">
  Dismiss
  </button>
  </div>
  </template> 
-->

<!--
  <style scoped>
  .Wrapper {
  width: 400px;
  max-width: 100%;
  display: flex;
  background-color: #fff;
  }

  [data-notification='success'] {
  color: green;
  }

  [data-notification='error'] {
  color: red;
  }
  </style> 
-->
