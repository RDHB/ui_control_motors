<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <p class="flex justify-center items-center w-full h-16 font-mono font-bold text-center uppercase bg-b-second">Connection Controllers</p>
        <div class="flex flex-col justify-center items-center w-full h-full">
            <DevicesSerialPortDropdown class="w-full h-full border-b-2 border-slate-800"/>
            <div class="flex flex-row justify-around items-center w-full h-full border-t-2 border-slate-800">
                <button class="flex flex-col justify-center items-center w-full h-full font-bold p-3" @click="cmStore.connectSerialDevice()" :class="{'hover:bg-gray-900': !connectBehavior, 'text-green-900': deviceConnected, 'text-green-500': !deviceConnected, 'text-white': !deviceSelected}" :disabled="connectBehavior">
                    <font-awesome-icon icon="fa-solid fa-plug" class="text-3xl"/> 
                    <p class=" hidden lg:flex text-center"> Connect </p>
                </button>
                <button class="flex flex-col justify-center items-center w-full h-full font-bold p-3" @click="cmStore.disconnectSerialDevice()" :class="{'hover:bg-gray-900': deviceConnected, 'text-red-500': deviceConnected, 'text-red-900': !deviceConnected, 'text-white': !deviceSelected}" :disabled="!deviceConnected">
                    <font-awesome-icon icon="fa-solid fa-plug-circle-xmark" class="text-3xl"/> 
                    <p class=" hidden lg:flex text-center"> Disconnect </p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    //components
    import DevicesSerialPortDropdown from '@renderer/components/connections_controllers/DevicesSerialPortDropdown.vue'

    //loading pinea stores
    import { storeToRefs } from 'pinia';
    import { use_control_motor_store } from '../../stores/control_motor_store'

    const cmStore = use_control_motor_store()
    const { deviceConnected, pathDeviceSelected } = storeToRefs(cmStore)


    // loading icons from fontaweson
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fas)


    const deviceSelected = computed(() => {
        return pathDeviceSelected.value != 'Select a Device'
    })

    const connectBehavior = computed(() => {
        return ( deviceSelected.value && deviceConnected.value ) || !( deviceSelected.value || deviceConnected.value )
    })

</script>