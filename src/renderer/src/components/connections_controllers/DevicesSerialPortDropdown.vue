<template>
    <div class="relative w-full flex flex-col justify-center">
        <button id="deviceDropdownDefault" data-dropdown-toggle="deviceDropdown" class="flex flex-row justify-center items-center text-white hover:text-aqua w-full h-full text-center font-bold" type="button" @click="cmStore.getPathsSerialPortDevices(); isHiddenOptionsDropdown=!isHiddenOptionsDropdown" :disabled="deviceConnected">
            {{ pathDeviceSelected }} 
            <svg class="w-2.5 h-full ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div v-if="isHiddenOptionsDropdown" id="deviceDropdown" class="absolute z-10 divide-y shadow w-full bg-gray-800 overflow-y-scroll" style="height: 4rem" >
            <ul class="py-1 text-aqua">
                <li class="w-full">
                    <button class="w-full block px-4 py-2 hover:bg-aqua1" @click="selectDevice('Select a Device')">
                        Select a Device
                    </button>
                </li>
                <li v-for="deviceSerialPortList in devicesSerialPortList" class="w-full">
                    <button class="w-full block px-4 py-2 hover:bg-aqua1" @click="selectDevice(deviceSerialPortList)">
                        {{ deviceSerialPortList }}
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
    const { pathDeviceSelected, deviceConnected, devicesSerialPortList } = storeToRefs(cmStore)


    const isHiddenOptionsDropdown = ref(false)

    function selectDevice(devicePath){
        pathDeviceSelected.value = devicePath
        isHiddenOptionsDropdown.value = !isHiddenOptionsDropdown
    }
</script>