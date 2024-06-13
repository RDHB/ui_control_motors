<template>
    <div class="relative w-full flex flex-col justify-center">
        <button class="flex flex-row justify-center items-center text-white hover:text-aqua w-full h-full text-center font-bold" type="button" @click="cmStore.getPathsSerialPortDevices(); isHiddenOptionsDropdown=!isHiddenOptionsDropdown">
            {{ directionMotorRotation.name }} 
            <svg class="w-2.5 h-full ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div v-if="isHiddenOptionsDropdown" id="deviceDropdown" class="absolute z-10 divide-y shadow w-full h-full bg-gray-800 overflow-y-auto">
            <ul class="py-1 text-aqua">
                <li v-for="motorDirectionOption in motorDirectionOptions" class="w-full">
                    <button class="w-full block px-4 py-2 hover:bg-aqua1" @click="selectStepResolution(motorDirectionOption)">
                        {{ motorDirectionOption.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script setup>
    //imports
    import { ref } from 'vue'

    //loading pinea stores
    import { storeToRefs } from 'pinia';
    import { use_control_motor_store } from '../../stores/control_motor_store'

    const cmStore = use_control_motor_store()
    const { directionMotorRotation } = storeToRefs(cmStore)


    const isHiddenOptionsDropdown = ref(false)

    const motorDirectionOptions = ref([
        {
            name: 'Clockwise',
            value: 1
        },
        {
            name: 'Counterclockwise',
            value: 2
        }
    ])

    function selectStepResolution(motorDirectionOption){
        directionMotorRotation.value = motorDirectionOption
        isHiddenOptionsDropdown.value = !isHiddenOptionsDropdown
    }
</script>

<style scoped></style>