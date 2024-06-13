<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <p class="flex justify-center items-center w-full h-16 font-mono font-bold text-center uppercase bg-b-second">
            Equipment Controllers
        </p>
        <div class="flex flex-col lg:flex-row justify-center items-center w-full h-full">
            <div class="flex flex-row lg:flex-col justify-center items-center w-full h-full border-b-2 lg:border-b-0 lg:border-r-2 border-slate-800">
                <div class="flex flex-row justify-around items-center w-full h-full">
                    <button @click="cmStore.runSerialDevice()" class="w-full h-full text-center font-semibold uppercase p-3" :class="{'hover:bg-slate-900': !(disabledButton), 'text-green-500': deviceConnected, 'text-green-900': deviceRunning, 'text-white': !deviceConnected}" :disabled="disabledButton">
                        <font-awesome-icon icon="fa-solid fa-circle-play" class="text-3xl"/> 
                    </button>
                    <button @click="cmStore.stopSerialDevice()" class="w-full h-full text-center font-semibold uppercase p-3":class="{'hover:bg-slate-900': disabledButton, 'text-red-500': deviceRunning, 'text-red-900': !deviceRunning, 'text-white': !deviceConnected}" :disabled="!disabledButton || !deviceConnected">
                        <font-awesome-icon icon="fa-solid fa-circle-stop" class="text-3xl"/> 
                    </button>
                </div>
                <div class="flex flex-row justify-around items-center w-full h-full">
                    <button class="w-1/3 h-full text-center font-semibold p-3" :class="{'hover:bg-slate-900': !(disabledButton), 'hover:text-aqua': !(disabledButton)}" :disabled="disabledButton">
                        <font-awesome-icon icon="fa-solid fa-undo" class="text-xl"/> 
                        <p class="hidden lg:flex justify-center items-center">Position</p>
                    </button>
                    <button class="w-1/3 h-full text-center font-semibold p-3" :class="{'hover:bg-slate-900': !(disabledButton), 'hover:text-aqua': !(disabledButton)}" :disabled="( deviceConnected && deviceRunning ) || !(deviceConnected || deviceRunning)">
                        <font-awesome-icon icon="fa-solid fa-redo" class="text-xl"/> 
                        <p class="hidden lg:flex justify-center items-center">Position</p>
                    </button>
                    <button class="flex flex-row md:flex-col lg:flex-row justify-center items-center w-1/3 h-full p-2 hover:bg-slate-900" @click="cmStore.setUseOnlyMotor()">
                        <input type="checkbox" class="w-5 h-5 accent-aqua1 m-3" :value="useOnlyMotor" :checked="useOnlyMotor"/>
                        <div class="w-12 h-10 bg-motor bg-no-repeat bg-cover bg-center"/>
                    </button>
                </div>
            </div>
            <div class="flex flex-row lg:flex-col justify-center items-center w-full h-20 lg:h-full border-t-2 lg:border-t-0 lg:border-l-2 border-slate-800">
                <StepResolutionDropdown         class="w-full h-full"/>
                <DirectionMotorRotationDropdown class="w-full h-full"/>
            </div>

            
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
 
    //components
    import StepResolutionDropdown  from '@renderer/components/equipment_controller/StepResolutionDropdown.vue'; 
    import DirectionMotorRotationDropdown from '@renderer/components/equipment_controller/DirectionMotorRotationDropdown.vue';   
    
    //loading pinea stores
    import { storeToRefs } from 'pinia';
    import { use_control_motor_store } from '../../stores/control_motor_store';

    const cmStore = use_control_motor_store();
    const { deviceRunning, deviceConnected, useOnlyMotor } = storeToRefs(cmStore);

    // loading icons from fontaweson
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { fas } from '@fortawesome/free-solid-svg-icons';
    library.add(fas);


    const disabledButton = computed(() => {
        return ( deviceConnected.value && deviceRunning.value ) || !(deviceConnected.value || deviceRunning.value)
    });

</script>