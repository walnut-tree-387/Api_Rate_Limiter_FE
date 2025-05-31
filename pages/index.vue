<template>
    <div class="p-100">
        <div class="w-full">
            <label :for="id" class="block mb-1 text-sm font-medium text-gray-700">
                Please enter your name
            </label>
            <input :id="id" v-model="modelValue" :type="type" :placeholder="placeholder"
                class="w-full px-3 py-2 text-sm border rounded-md shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
        </div>
    </div>
</template>