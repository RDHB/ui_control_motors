import { defineStore } from "pinia"
import { ref } from "vue"
const { SerialPort } = require("serialport")

export const use_control_motor_store = defineStore("control_motor_store", () => {
    //state applicacion variables
    const motorDegreesBySteps = ref<number>(1.8)
    const motorStepResolution = ref<object>({name: 'Full Step', value: '1'})
    const directionMotorRotation = ref<object>({name: "Clockwise", value: '1'})
    const useOnlyMotor = ref<boolean>(true)
    
    //connection variables
    const pathDeviceSelected = ref<string>("Select a Device")
    const devicesSerialPortList = ref<string[]>([])
    const baudRate = ref<number>(9600)
    const deviceConnected = ref<boolean>(false)
    const deviceRunning = ref<boolean>(false)

    const serialPortDevice = new SerialPort(
        {
            path: pathDeviceSelected.value,
            baudRate: baudRate.value,
            autoOpen: false
        },
           
    )

    //dataset variables
    const dataset = ref([
        {x: 1, y: 1},
        {x: 2, y: 1.01},
        {x: 3, y: 1.05},
        {x: 4, y: 1.1},
        {x: 5, y: 1.5},
        {x: 6, y: 1.300001},
    ])
    

    //functions for manages state of application
    //connection functions
    function getPathsSerialPortDevices(){
        SerialPort.list().then(ports => {
            ports.forEach(function(port) {
              if (port.manufacturer != undefined){
                devicesSerialPortList.value = []
                devicesSerialPortList.value.push(port.path)
              }
            })
        })
    }

    function connectSerialDevice(){
        if (pathDeviceSelected.value !== "Select a Device") {
            serialPortDevice.value = new SerialPort(
                {
                    path: pathDeviceSelected.value,
                    baudRate: baudRate.value,
                },
                function (err) {
                    if(err) {
                        deviceConnected.value = false 
                        alert("An error occurred while trying to connect to the device \n" + err)
                    }
                    else {
                        deviceConnected.value = true
                        alert("The connection to the device has been successfully established")
                    }
                }
            )
        }
        else {
            alert("Select a device before attempting to connect")
        }
    }

    function disconnectSerialDevice(){
        if (serialPortDevice.value !== undefined){
            serialPortDevice.value.close(function (err){
                if (err){
                    alert("An error occurred while trying to disconnect to the device \n" + err)
                }
                else {
                    deviceConnected.value = false
                    alert("The device has been disconnected successfully")
                }
            })
        }
        else {
            alert("You currently have no devices connected")
        }
    }


    function runSerialDevice(){
        deviceRunning.value = true
        console.log("running")
    }


    function stopSerialDevice(){
        deviceRunning.value = false
        console.log("stopping")
    }

    function setUseOnlyMotor(){
        useOnlyMotor.value = !useOnlyMotor.value
    }
    
    return {
        dataset,
        motorDegreesBySteps,
        motorStepResolution,
        directionMotorRotation,
        useOnlyMotor,
        pathDeviceSelected,
        devicesSerialPortList,
        getPathsSerialPortDevices,
        connectSerialDevice,
        disconnectSerialDevice,
        deviceConnected,
        deviceRunning,
        runSerialDevice,
        stopSerialDevice,
        setUseOnlyMotor,
    }
})