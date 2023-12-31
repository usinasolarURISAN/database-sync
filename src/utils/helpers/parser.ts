export const parseStringObjectToEpeverObject = (obj: any): any => {
  const newObj = {
    id: obj.id,

    deviceId: obj.deviceId,

    overTemperatureInsideTheDevice: Boolean(
      obj.overTemperatureInsideTheDevice === 'true'
    ),

    isNight: Number(obj.isNight),

    PVArrayInputVoltage: Number(obj.PVArrayInputVoltage),

    PVArrayInputCurrent: Number(obj.PVArrayInputCurrent),

    PVArrayInputPowerL: Number(obj.PVArrayInputPowerL),

    PVArrayInputPowerH: Number(obj.PVArrayInputPowerH),

    loadVoltage: Number(obj.loadVoltage),

    loadCurrent: Number(obj.loadCurrent),

    loadPowerL: Number(obj.loadPowerL),

    loadPowerH: Number(obj.loadPowerH),

    batteryTemperature: Number(obj.batteryTemperature),

    deviceTemperature: Number(obj.deviceTemperature),

    batterySOC: Number(obj.batterySOC),

    batteryRealRatedVoltage: Number(obj.batteryRealRatedVoltage),

    batteryStatus: obj.batteryStatus,

    chargingEquipmentStatus: obj.chargingEquipmentStatus,

    dischargingEquipmentStatus: obj.dischargingEquipmentStatus,

    maximumBatteryVoltageToday: Number(obj.maximumBatteryVoltageToday),

    minimumBatteryVoltageToday: Number(obj.minimumBatteryVoltageToday),

    consumedEnergyTodayL: Number(obj.consumedEnergyTodayL),

    consumedEnergyTodayH: Number(obj.consumedEnergyTodayH),

    consumedEnergyThisMonthL: Number(obj.consumedEnergyThisMonthL),

    consumedEnergyThisMonthH: Number(obj.consumedEnergyThisMonthH),

    consumedEnergyThisYearL: Number(obj.consumedEnergyThisYearL),

    consumedEnergyThisYearH: Number(obj.consumedEnergyThisYearH),

    totalConsumedEnergyL: Number(obj.totalConsumedEnergyL),

    totalConsumedEnergyH: Number(obj.totalConsumedEnergyH),

    generatedEnergyTodayL: Number(obj.generatedEnergyTodayL),

    generatedEnergyTodayH: Number(obj.generatedEnergyTodayH),

    generatedEnergyThisMonthL: Number(obj.generatedEnergyThisMonthL),

    generatedEnergyThisMonthH: Number(obj.generatedEnergyThisMonthH),

    generatedEnergyThisYearL: Number(obj.generatedEnergyThisYearL),

    generatedEnergyThisYearH: Number(obj.generatedEnergyThisYearH),

    totalGeneratedEnergyL: Number(obj.totalGeneratedEnergyL),

    totalGeneratedEnergyH: Number(obj.totalGeneratedEnergyH),

    batteryVoltage: Number(obj.batteryVoltage),

    batteryCurrentL: Number(obj.batteryCurrentL),

    batteryCurrentH: Number(obj.batteryCurrentH),

    ratedChargingCurrent: Number(obj.ratedChargingCurrent),

    ratedLoadCurrent: Number(obj.ratedLoadCurrent),

    batteryType: obj.batteryType,

    batteryCapacity: Number(obj.batteryCapacity),

    temperatureCompensationCoefficient: Number(
      obj.temperatureCompensationCoefficient
    ),

    chargingLimitVoltage: Number(obj.chargingLimitVoltage),

    overVoltageReconnectVoltage: Number(obj.overVoltageReconnectVoltage),

    equalizeChargingVoltage: Number(obj.equalizeChargingVoltage),

    boostChargingVoltage: Number(obj.boostChargingVoltage),

    floatChargingVoltage: Number(obj.floatChargingVoltage),

    boostReconnectChargingVoltage: Number(obj.boostReconnectChargingVoltage),

    lowVoltageReconnectVoltage: Number(obj.lowVoltageReconnectVoltage),

    underVoltageWarningRecoverVoltage: Number(
      obj.underVoltageWarningRecoverVoltage
    ),

    underVoltageWarningVoltage: Number(obj.underVoltageWarningVoltage),

    lowVoltageDisconnectVoltage: Number(obj.lowVoltageDisconnectVoltage),

    dischargingLimitVoltage: Number(obj.dischargingLimitVoltage),

    batteryRatedVoltageLevel: obj.batteryRatedVoltageLevel,

    defaultLoadOnOffInManualMode: Boolean(
      obj.defaultLoadOnOffInManualMode === 'true'
    ),

    equalizeDuration: Number(obj.equalizeDuration),

    boostDuration: Number(obj.boostDuration),

    batteryDischarge: Number(obj.batteryDischarge),

    batteryCharge: Number(obj.batteryCharge),

    chargingMode: Boolean(obj.chargingMode === 'true'),

    nightTimeThresholdVoltageNTTV: Number(obj.nightTimeThresholdVoltageNTTV),

    lightSignalStartupNightDelayTime: Number(
      obj.lightSignalStartupNightDelayTime
    ),

    dayTimeThresholdVoltageDTTV: Number(obj.dayTimeThresholdVoltageDTTV),

    lightSignalCloseDayDelayTime: Number(obj.lightSignalCloseDayDelayTime),

    loadControlMode: obj.loadControlMode,

    LightOnTimeTime1: obj.LightOnTimeTime1,

    LightOnTimeTime2: obj.LightOnTimeTime2,

    timingControlTurnOnTime1Second: Number(obj.timingControlTurnOnTime1Second),

    timingControlTurnOnTime1Minute: Number(obj.timingControlTurnOnTime1Minute),

    timingControlTurnOffTime1Second: Number(
      obj.timingControlTurnOffTime1Second
    ),

    timingControlTurnOffTime1Minute: Number(
      obj.timingControlTurnOffTime1Minute
    ),

    timingControlTurnOffTime1Hour: Number(obj.timingControlTurnOffTime1Hour),

    timingControlTurnOnTime2Second: Number(obj.timingControlTurnOnTime2Second),

    timingControlTurnOnTime2Minute: Number(obj.timingControlTurnOnTime2Minute),

    timingControlTurnOnTime2Hour: Number(obj.timingControlTurnOnTime2Hour),

    timingControlTurnOffTime2Second: Number(
      obj.timingControlTurnOffTime2Second
    ),

    timingControlTurnOffTime2Minute: Number(
      obj.timingControlTurnOffTime2Minute
    ),

    timingControlTurnOffTime2Hour: Number(obj.timingControlTurnOffTime2Hour),

    nightTime: obj.nightTime,

    timingControlTimeChoose: Number(obj.timingControlTimeChoose),

    realTimeClockSecondsMinutes: obj.realTimeClockSecondsMinutes,

    realTimeClockHourDay: obj.realTimeClockHourDay,

    realTimeClockMonthYear: obj.realTimeClockMonthYear,

    batteryUpperTemperatureLimit: Number(obj.batteryUpperTemperatureLimit),

    batteryLowerTemperatureLimit: Number(obj.batteryLowerTemperatureLimit),

    deviceOverTemperature: Number(obj.deviceOverTemperature),

    deviceRecoveryTemperature: Number(obj.deviceRecoveryTemperature),

    backlightTime: Number(obj.backlightTime),

    arrayRatedVoltage: Number(obj.arrayRatedVoltage),

    arrayRatedCurrent: Number(obj.arrayRatedCurrent),

    arrayRatedPowerL: Number(obj.arrayRatedPowerL),

    arrayRatedPowerH: Number(obj.arrayRatedPowerH),

    batteryRatedVoltage: Number(obj.batteryRatedVoltage),

    batteryRatedCurrent: Number(obj.batteryRatedCurrent),

    batteryRatedPowerL: Number(obj.batteryRatedPowerL),

    batteryRatedPowerH: Number(obj.batteryRatedPowerH),

    ratedLoadVoltage: null,

    ratedLoadPowerToL: null,

    ratedLoadPowerToH: null,

    timestamp: Number(obj.timestamp),

    timestamp_minute: Number(obj.timestamp_minute),

    timestamp_hour: Number(obj.timestamp_hour),

    timestamp_date: Number(obj.timestamp_date),

    timestamp_month: Number(obj.timestamp_month),

    timestamp_year: Number(obj.timestamp_year),
  };

  return newObj;
};
