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

export const parseStringObjectToGoodweObject = (obj: any): any => {
  const newObj = {
    
  id: obj.id,

  
  deviceId: obj.deviceId,

  
  lowestFeedingVoltageOfPV: Number(obj.lowestFeedingVoltageOfPV),

  
  reconnectTime: Number(obj.reconnectTime),

  
  highLimitOfGridVoltage: Number(obj.highLimitOfGridVoltage),

  
  lowLimitOfGridVoltage: Number(obj.lowLimitOfGridVoltage),

  
  highLimitOfGridFrequency: Number(obj.highLimitOfGridFrequency),

  
  lowLimitOfGridFreqency: Number(obj.lowLimitOfGridFreqency),

  
  rtcDateTimeYearMonth: obj.rtcDateTimeYearMonth,

  
  rtcDateTimeDateHour: obj.rtcDateTimeDateHour,

  
  rtcDateTimeMinuteSecond: obj.rtcDateTimeMinuteSecond,

  
  rangeOfRealPowerAdjust: Number(obj.rangeOfRealPowerAdjust),

  
  rangeOfReactivePowerAdjust: obj.rangeOfReactivePowerAdjust,

  
  serialNumberOfInverter: obj.serialNumberOfInverter,

  
  modelNameOfInverter: obj.modelNameOfInverter,

  
  errorCode: obj.errorCode,

  
  eTotal: Number(obj.eTotal),

  
  hTotal: Number(obj.hTotal),

  
  pvVoltageOfFirstTracker: Number(obj.pvVoltageOfFirstTracker),

  
  pvVoltageOfSecondTracker: Number(obj.pvVoltageOfSecondTracker),

  
  pvCurrentOfFirstTracker: Number(obj.pvCurrentOfFirstTracker),

  
  pvCurrentOfSecondTracker: Number(obj.pvCurrentOfSecondTracker),

  
  gridVoltageOfPhase1: Number(obj.gridVoltageOfPhase1),

  
  gridVoltageOfPhase2: Number(obj.gridVoltageOfPhase2),

  
  gridVoltageOfPhase3: Number(obj.gridVoltageOfPhase3),

  
  gridCurrentOfPhase1: Number(obj.gridCurrentOfPhase1),

  
  gridCurrentOfPhase2: Number(obj.gridCurrentOfPhase2),

  
  gridCurrentOfPhase3: Number(obj.gridCurrentOfPhase3),

  
  gridFrequencyOfPhase1: Number(obj.gridFrequencyOfPhase1),

  
  gridFrequencyOfPhase2: Number(obj.gridFrequencyOfPhase2),

  
  gridFrequencyOfPhase3: Number(obj.gridFrequencyOfPhase3),

  
  feedingPowerToGrid: Number(obj.feedingPowerToGrid),

  
  runningStatus: obj.runningStatus,

  
  temperatureOfHeatsink: Number(obj.temperatureOfHeatsink),

  
  eYieldDay: Number(obj.eYieldDay),

  
  vpv1: Number(obj.vpv1),

  
  vpv2: Number(obj.vpv2),

  
  ipv1: Number(obj.ipv1),

  
  ipv2: Number(obj.ipv2),

  
  vac1: Number(obj.vac1),

  
  vac2: Number(obj.vac2),

  
  vac3: Number(obj.vac3),

  
  iac1: Number(obj.iac1),

  
  iac2: Number(obj.iac2),

  
  iac3: Number(obj.iac3),

  
  fac1: Number(obj.fac1),

  
  fac2: Number(obj.fac2),

  
  fac3: Number(obj.fac3),

  
  pacL: Number(obj.pacL),

  
  workMode: obj.workMode,

  
  temperature: Number(obj.temperature),

  
  errorMessageH: obj.errorMessageH,

  
  errorMessageL: obj.errorMessageL,

  
  eTotalH: Number(obj.eTotalH),

  
  eTotalL: Number(obj.eTotalL),

  
  hTotalH: Number(obj.hTotalH),

  
  hTotalL: Number(obj.hTotalL),

  
  firmwareVersion: obj.firmwareVersion,

  
  warningCode: obj.warningCode,

  
  pv2FaultValue: Number(obj.pv2FaultValue),

  
  functionsValue: obj.functionsValue,

  
  line2VfaultValue: Number(obj.line2VfaultValue),

  
  line3VfaultValue: Number(obj.line3VfaultValue),

  
  busVoltage: Number(obj.busVoltage),

  
  nbusVoltage: Number(obj.nbusVoltage),

  
  line3FfaultValue: Number(obj.line3FfaultValue),

  
  safetyCountry: Number(obj.safetyCountry),

  
  eFeedDay: Number(obj.eFeedDay),

  
  yearMonth: obj.yearMonth,

  
  dateHour: obj.dateHour,

  
  minuteSecond: obj.minuteSecond,

  
  manufactureID: obj.manufactureID,

  
  rssi: Number(obj.rssi),

  
  pvMode: obj.pvMode,

  
  fmVersionOfARM: obj.fmVersionOfARM,

  
  gprsBurnInMode: obj.gprsBurnInMode,

  
  pacH: Number(obj.pacH),

  
  vpv3: Number(obj.vpv3),

  
  vpv4: Number(obj.vpv4),

  
  ipv3: Number(obj.ipv3),

  
  ipv4: Number(obj.ipv4),

  
  istr1: Number(obj.istr1),

  
  istr2: Number(obj.istr2),

  
  istr3: Number(obj.istr3),

  
  istr4: Number(obj.istr4),

  
  istr5: Number(obj.istr5),

  
  istr6: Number(obj.istr6),

  
  istr7: Number(obj.istr7),

  
  istr8: Number(obj.istr8),

  
  istr9: Number(obj.istr9),

  
  istr10: Number(obj.istr10),

  
  istr11: Number(obj.istr11),

  
  istr12: Number(obj.istr12),

  
  istr13: Number(obj.istr13),

  
  istr14: Number(obj.istr14),

  
  istr15: Number(obj.istr15),

  
  istr16: Number(obj.istr16),

  
  iStringStatus: obj.iStringStatus,

  
  istr18: Number(obj.istr18),

  
  istr19: Number(obj.istr19),

  
  istr20: Number(obj.istr20),

  
  pidWietapStatus: obj.pidWietapStatus,

  
  timestamp: Number(obj.timestamp),

  
  timestamp_minute: Number(obj.timestamp_minute),

  
  timestamp_hour: Number(obj.timestamp_hour),

  
  timestamp_date: Number(obj.timestamp_date),

  
  timestamp_month: Number(obj.timestamp_month),

  
  timestamp_year: Number(obj.timestamp_year),
  };

  return newObj;
};

