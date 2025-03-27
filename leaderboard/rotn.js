var selected_chart = "RR-All"
var selected_diff = "DiffImpossible"
var selected_remix = "NonRemix"
var selected_coda = "NonCoda"
var hide_cheaters = true

var valid_boards = [
"P_C_H_RRTwombtorial",
"P_C_H_RRPortamello",
"P_C_H_DLCApricot01",
"P_C_H_DLCApricot02",
"P_C_H_DLCApricot03",
"P_C_X_RRDiscoDisaster",
"P_C_X_RRElusional",
"P_C_X_RRVisualizeYourself",
"P_C_X_RRSpookhousePop",
"P_C_X_RROmandOn",
"P_C_X_RRMorningDove",
"P_C_X_RRHephsMess",
"P_C_X_RRAmalgamaniac",
"P_C_X_RRHangTenHeph",
"P_C_X_RRCountFunkula",
"P_C_X_RROverthinker",
"P_C_X_RRCryp2que",
"P_C_X_RRNocturning",
"P_C_X_RRGlassCages",
"P_C_X_RRHallowQueen",
"P_C_X_RRProgenitor",
"P_C_X_RRMatriarch",
"P_C_X_RRThunder",
"P_C_X_RREldritchHouse",
"P_C_X_RRRavevenge",
"P_C_X_RRRiftWithin",
"P_C_X_RRSuzusQuest",
"P_C_X_RRNecropolis",
"P_C_X_RRBaboosh",
"P_C_X_RRNecroSonatica",
"P_C_X_RRHarmonie",
"P_C_X_RRDeepBlues",
"P_C_X_RRMatron",
"P_C_X_RRReaper",
"P_C_X_RRFinalFugue",
"P_C_X_RRTwombtorial",
"P_C_X_RRPortamello",
"P_C_X_DLCApricot01",
"P_C_X_DLCApricot02",
"P_C_X_DLCApricot03",
"P_C_E_R_RRDiscoDisaster",
"P_C_E_R_RRElusional",
"P_C_E_R_RRVisualizeYourself",
"P_C_E_R_RRSpookhousePop",
"P_C_E_R_RROmandOn",
"P_C_E_R_RRMorningDove",
"P_C_E_R_RRHephsMess",
"P_C_E_R_RRAmalgamaniac",
"P_C_E_R_RRHangTenHeph",
"P_C_E_R_RRCountFunkula",
"P_C_E_R_RROverthinker",
"P_C_E_R_RRCryp2que",
"P_C_E_R_RRNocturning",
"P_C_E_R_RRGlassCages",
"P_C_E_R_RRHallowQueen",
"P_C_E_R_RRProgenitor",
"P_C_E_R_RRMatriarch",
"P_C_E_R_RRThunder",
"P_C_E_R_RREldritchHouse",
"P_C_E_R_RRRavevenge",
"P_C_E_R_RRRiftWithin",
"P_C_E_R_RRSuzusQuest",
"P_C_E_R_RRNecropolis",
"P_C_E_R_RRBaboosh",
"P_C_E_R_RRNecroSonatica",
"P_C_E_R_RRHarmonie",
"P_C_E_R_RRDeepBlues",
"P_C_E_R_RRMatron",
"P_C_E_R_RRReaper",
"P_C_E_R_RRFinalFugue",
"P_C_E_R_RRTwombtorial",
"P_C_E_R_RRPortamello",
"P_C_E_R_DLCApricot01",
"P_C_E_R_DLCApricot02",
"P_C_E_R_DLCApricot03",
"P_C_M_R_RRDiscoDisaster",
"P_C_M_R_RRElusional",
"P_C_M_R_RRVisualizeYourself",
"P_C_M_R_RRSpookhousePop",
"P_C_M_R_RROmandOn",
"P_C_M_R_RRMorningDove",
"P_C_M_R_RRHephsMess",
"P_C_M_R_RRAmalgamaniac",
"P_C_M_R_RRHangTenHeph",
"P_C_M_R_RRCountFunkula",
"P_C_M_R_RROverthinker",
"P_C_M_R_RRCryp2que",
"P_C_M_R_RRNocturning",
"P_C_M_R_RRGlassCages",
"P_C_M_R_RRHallowQueen",
"P_C_M_R_RRProgenitor",
"P_C_M_R_RRMatriarch",
"P_C_M_R_RRThunder",
"P_C_M_R_RREldritchHouse",
"P_C_M_R_RRRavevenge",
"P_C_M_R_RRRiftWithin",
"P_C_M_R_RRSuzusQuest",
"P_C_M_R_RRNecropolis",
"P_C_M_R_RRBaboosh",
"P_C_M_R_RRNecroSonatica",
"P_C_H_RS_CD_RRTwombtorial",
"P_C_H_RS_CD_RRPortamello",
"P_C_H_RS_CD_DLCApricot01",
"P_C_H_RS_CD_DLCApricot02",
"P_C_H_RS_CD_DLCApricot03",
"P_C_X_RS_CD_RRElusional",
"P_C_X_RS_CD_RRMorningDove",
"P_C_X_RS_CD_RRGlassCages",
"P_C_X_RS_CD_RRHallowQueen",
"P_C_X_RS_CD_RRThunder",
"P_C_X_RS_CD_RRRavevenge",
"P_C_X_RS_CD_RRBaboosh",
"P_C_X_RS_CD_RRHarmonie",
"P_C_X_RS_CD_RRTwombtorial",
"P_C_X_RS_CD_RRPortamello",
"P_C_X_RS_CD_DLCApricot01",
"P_C_X_RS_CD_DLCApricot02",
"P_C_X_RS_CD_DLCApricot03",
"P_C_E_RS_RRSuzusQuest",
"P_C_E_RS_RRNecroSonatica",
"P_C_M_RS_RRDiscoDisaster",
"P_C_M_RS_RRElusional",
"P_C_M_RS_RRVisualizeYourself",
"P_C_M_RS_RRSpookhousePop",
"P_C_M_RS_RROmandOn",
"P_C_M_RS_RRMorningDove",
"P_C_M_RS_RRHephsMess",
"P_C_M_RS_RRAmalgamaniac",
"P_C_M_RS_RRHangTenHeph",
"P_C_M_RS_RRCountFunkula",
"P_C_M_RS_RROverthinker",
"P_C_M_RS_RRCryp2que",
"P_C_M_RS_RRNocturning",
"P_C_M_RS_RRGlassCages",
"P_C_M_RS_RRHallowQueen",
"P_C_M_RS_RRProgenitor",
"P_C_M_RS_RRMatriarch",
"P_C_M_RS_RRThunder",
"P_C_M_RS_RREldritchHouse",
"P_C_M_RS_RRRavevenge",
"P_C_M_RS_RRRiftWithin",
"P_C_M_RS_RRSuzusQuest",
"P_C_M_RS_RRNecropolis",
"P_C_M_RS_RRNecroSonatica",
"P_C_M_RS_RRHarmonie",
"P_C_M_RS_RRReaper",
"P_C_M_RS_RRPortamello",
"P_C_M_RS_DLCApricot01",
"P_C_M_RS_DLCApricot03",
"P_C_H_RS_RRDiscoDisaster",
"P_C_H_RS_RRElusional",
"P_C_H_RS_RRVisualizeYourself",
"P_C_H_RS_RRSpookhousePop",
"P_C_H_RS_RROmandOn",
"P_C_H_RS_RRMorningDove",
"P_C_H_RS_RRHephsMess",
"P_C_H_RS_RRAmalgamaniac",
"P_C_H_RS_RRHangTenHeph",
"P_C_H_RS_RRCountFunkula",
"P_C_H_RS_RROverthinker",
"P_C_H_RS_RRCryp2que",
"P_C_H_RS_RRNocturning",
"P_C_H_RS_RRGlassCages",
"P_C_H_RS_RRHallowQueen",
"P_C_H_RS_RRProgenitor",
"P_C_H_RS_RRMatriarch",
"P_C_H_RS_RRThunder",
"P_C_H_RS_RREldritchHouse",
"P_C_H_RS_RRRavevenge",
"P_C_H_RS_RRRiftWithin",
"P_C_H_RS_RRSuzusQuest",
"P_C_H_RS_RRNecropolis",
"P_C_H_RS_RRBaboosh",
"P_C_H_RS_RRNecroSonatica",
"P_C_H_RS_RRHarmonie",
"P_C_H_RS_RRDeepBlues",
"P_C_H_RS_RRMatron",
"P_C_H_RS_RRReaper",
"P_C_H_RS_RRFinalFugue",
"P_C_H_RS_RRTwombtorial",
"P_C_H_RS_RRPortamello",
"P_C_H_RS_DLCApricot01",
"P_C_H_RS_DLCApricot02",
"P_C_H_RS_DLCApricot03",
"P_C_X_RS_RRDiscoDisaster",
"P_C_X_RS_RRElusional",
"P_C_X_RS_RRVisualizeYourself",
"P_C_X_RS_RROmandOn",
"P_C_X_RS_RRMorningDove",
"P_C_X_RS_RRHephsMess",
"P_C_X_RS_RRAmalgamaniac",
"P_C_X_RS_RRHangTenHeph",
"P_C_X_RS_RROverthinker",
"P_C_X_RS_RRCryp2que",
"P_C_X_RS_RRNocturning",
"P_C_X_RS_RRGlassCages",
"P_C_X_RS_RRHallowQueen",
"P_C_H_CD_RROverthinker",
"P_C_H_CD_RRCryp2que",
"P_C_H_CD_RRNocturning",
"P_C_H_CD_RRGlassCages",
"P_C_H_CD_RRHallowQueen",
"P_C_H_CD_RRProgenitor",
"P_C_H_CD_RRMatriarch",
"P_C_H_CD_RRThunder",
"P_C_H_CD_RREldritchHouse",
"P_C_H_CD_RRRavevenge",
"P_C_H_CD_RRRiftWithin",
"P_C_H_CD_RRSuzusQuest",
"P_C_H_CD_RRNecropolis",
"P_C_H_CD_RRBaboosh",
"P_C_H_CD_RRNecroSonatica",
"P_C_H_CD_RRHarmonie",
"P_C_H_CD_RRDeepBlues",
"P_C_H_CD_RRMatron",
"P_C_H_CD_RRReaper",
"P_C_H_CD_RRFinalFugue",
"P_C_H_CD_RRTwombtorial",
"P_C_H_CD_RRPortamello",
"P_C_H_CD_DLCApricot01",
"P_C_H_CD_DLCApricot02",
"P_C_H_CD_DLCApricot03",
"P_C_X_CD_RRDiscoDisaster",
"P_C_X_CD_RRElusional",
"P_C_X_CD_RRVisualizeYourself",
"P_C_X_CD_RRSpookhousePop",
"P_C_X_CD_RROmandOn",
"P_C_X_CD_RRMorningDove",
"P_C_X_CD_RRHephsMess",
"P_C_X_CD_RRAmalgamaniac",
"P_C_X_CD_RRHangTenHeph",
"P_C_X_CD_RRCountFunkula",
"P_C_X_CD_RROverthinker",
"P_C_X_CD_RRCryp2que",
"P_C_X_CD_RRNocturning",
"P_C_X_CD_RRGlassCages",
"P_C_X_CD_RRHallowQueen",
"P_C_X_CD_RRProgenitor",
"P_C_X_CD_RRMatriarch",
"P_C_X_CD_RRThunder",
"P_C_X_CD_RREldritchHouse",
"P_C_X_CD_RRRavevenge",
"P_C_X_CD_RRRiftWithin",
"P_C_X_CD_RRSuzusQuest",
"P_C_X_CD_RRNecropolis",
"P_C_X_CD_RRBaboosh",
"P_C_X_CD_RRNecroSonatica",
"P_C_X_CD_RRHarmonie",
"P_C_X_CD_RRDeepBlues",
"P_C_X_CD_RRMatron",
"P_C_X_CD_RRReaper",
"P_C_X_CD_RRFinalFugue",
"P_C_X_CD_RRTwombtorial",
"P_C_X_CD_RRPortamello",
"P_C_X_CD_DLCApricot01",
"P_C_X_CD_DLCApricot02",
"P_C_X_CD_DLCApricot03",
"P_C_E_R_CD_RRDiscoDisaster",
"P_C_E_R_CD_RRElusional",
"P_C_E_R_CD_RRVisualizeYourself",
"P_C_E_R_CD_RRSpookhousePop",
"P_C_E_R_CD_RROmandOn",
"P_C_E_R_CD_RRMorningDove",
"P_C_E_R_CD_RRHephsMess",
"P_C_E_R_CD_RRAmalgamaniac",
"P_C_E_R_CD_RRHangTenHeph",
"P_C_E_R_CD_RRCountFunkula",
"P_C_E_R_CD_RROverthinker",
"P_C_E_R_CD_RRCryp2que",
"P_C_E_R_CD_RRNocturning",
"P_C_E_R_CD_RRGlassCages",
"P_C_E_R_CD_RRHallowQueen",
"P_C_E_R_CD_RRProgenitor",
"P_C_E_R_CD_RRMatriarch",
"P_C_E_R_CD_RRThunder",
"P_C_E_R_CD_RREldritchHouse",
"P_C_E_R_CD_RRRavevenge",
"P_C_E_R_CD_RRRiftWithin",
"P_C_E_R_CD_RRSuzusQuest",
"P_C_E_R_CD_RRNecropolis",
"P_C_E_R_CD_RRBaboosh",
"P_C_E_R_CD_RRNecroSonatica",
"P_C_E_R_CD_RRHarmonie",
"P_C_E_R_CD_RRDeepBlues",
"P_C_E_R_CD_RRMatron",
"P_C_E_R_CD_RRReaper",
"P_C_E_R_CD_RRFinalFugue",
"P_C_E_R_CD_RRTwombtorial",
"P_C_E_R_CD_RRPortamello",
"P_C_E_R_CD_DLCApricot01",
"P_C_E_R_CD_DLCApricot02",
"P_C_E_R_CD_DLCApricot03",
"P_C_M_R_CD_RRDiscoDisaster",
"P_C_M_R_CD_RRElusional",
"P_C_M_R_CD_RRVisualizeYourself",
"P_C_M_R_CD_RRSpookhousePop",
"P_C_M_R_CD_RROmandOn",
"P_C_M_R_CD_RRMorningDove",
"P_C_M_R_CD_RRHephsMess",
"P_C_M_R_CD_RRAmalgamaniac",
"P_C_M_R_CD_RRHangTenHeph",
"P_C_M_R_CD_RRCountFunkula",
"P_C_M_R_CD_RROverthinker",
"P_C_M_R_CD_RRCryp2que",
"P_C_M_R_CD_RRNocturning",
"P_C_M_R_CD_RRGlassCages",
"P_C_M_R_CD_RRHallowQueen",
"P_C_M_R_CD_RRProgenitor",
"P_C_M_R_CD_RRMatriarch",
"P_C_M_R_CD_RRThunder",
"P_C_M_R_CD_RREldritchHouse",
"P_C_M_R_CD_RRRavevenge",
"P_C_M_R_CD_RRRiftWithin",
"P_C_M_R_CD_RRSuzusQuest",
"P_C_M_R_CD_RRNecropolis",
"P_C_M_R_CD_RRBaboosh",
"P_C_M_R_CD_RRNecroSonatica",
"P_C_M_R_CD_RRHarmonie",
"P_C_M_R_CD_RRDeepBlues",
"P_C_M_R_CD_RRMatron",
"P_C_M_R_CD_RRReaper",
"P_C_M_R_CD_RRFinalFugue",
"P_C_M_R_CD_RRTwombtorial",
"P_C_M_R_CD_RRPortamello",
"P_C_M_R_CD_DLCApricot01",
"P_C_M_R_CD_DLCApricot02",
"P_C_M_R_CD_DLCApricot03",
"P_C_H_R_CD_RRDiscoDisaster",
"P_C_H_R_CD_RRElusional",
"P_C_H_R_CD_RRVisualizeYourself",
"P_C_H_R_CD_RRSpookhousePop",
"P_C_H_R_CD_RROmandOn",
"P_C_H_R_CD_RRMorningDove",
"P_C_H_R_CD_RRHephsMess",
"P_C_H_R_CD_RRAmalgamaniac",
"P_C_H_R_CD_RRHangTenHeph",
"P_C_H_R_CD_RRCountFunkula",
"P_C_H_R_CD_RROverthinker",
"P_C_H_R_CD_RRCryp2que",
"P_C_H_R_CD_RRNocturning",
"P_C_H_R_CD_RRGlassCages",
"P_C_H_R_CD_RRHallowQueen",
"P_C_H_R_CD_RRProgenitor",
"P_C_H_R_CD_RRMatriarch",
"P_C_H_R_CD_RRThunder",
"P_C_H_R_CD_RREldritchHouse",
"P_C_H_R_CD_RRRavevenge",
"P_C_H_R_CD_RRRiftWithin",
"P_C_H_R_CD_RRSuzusQuest",
"P_C_H_R_CD_RRNecropolis",
"P_C_H_R_CD_RRBaboosh",
"P_C_H_R_CD_RRNecroSonatica",
"P_C_H_R_CD_RRHarmonie",
"P_C_H_R_CD_RRDeepBlues",
"P_C_H_R_CD_RRMatron",
"P_C_H_R_CD_RRReaper",
"P_C_H_R_CD_RRFinalFugue",
"P_C_H_R_CD_RRTwombtorial",
"P_C_H_R_CD_RRPortamello",
"P_C_H_R_CD_DLCApricot01",
"P_C_H_R_CD_DLCApricot02",
"P_C_H_R_CD_DLCApricot03",
"P_C_X_R_CD_RRDiscoDisaster",
"P_C_X_R_CD_RRElusional",
"P_C_X_R_CD_RRVisualizeYourself",
"P_C_X_R_CD_RRSpookhousePop",
"P_C_X_R_CD_RROmandOn",
"P_C_X_R_CD_RRMorningDove",
"P_C_X_R_CD_RRHephsMess",
"P_C_X_R_CD_RRAmalgamaniac",
"P_C_X_R_CD_RRHangTenHeph",
"P_C_X_R_CD_RRCountFunkula",
"P_C_X_R_CD_RROverthinker",
"P_C_X_R_CD_RRCryp2que",
"P_C_X_R_CD_RRNocturning",
"P_C_X_R_CD_RRGlassCages",
"P_C_X_R_CD_RRHallowQueen",
"P_C_X_R_CD_RRProgenitor",
"P_C_X_R_CD_RRMatriarch",
"P_C_X_R_CD_RRThunder",
"P_C_X_R_CD_RREldritchHouse",
"P_C_X_R_CD_RRRavevenge",
"P_C_X_R_CD_RRRiftWithin",
"P_C_X_R_CD_RRSuzusQuest",
"P_C_X_R_CD_RRNecropolis",
"P_C_X_R_CD_RRBaboosh",
"P_C_X_R_CD_RRNecroSonatica",
"P_C_X_R_CD_RRHarmonie",
"P_C_X_R_CD_RRDeepBlues",
"P_C_X_R_CD_RRMatron",
"P_C_X_R_CD_RRReaper",
"P_C_X_R_CD_RRFinalFugue",
"P_C_X_R_CD_RRTwombtorial",
"P_C_X_R_CD_RRPortamello",
"P_C_X_R_CD_DLCApricot01",
"P_C_X_R_CD_DLCApricot02",
"P_C_X_R_CD_DLCApricot03",
"P_C_M_R_RRHarmonie",
"P_C_M_R_RRDeepBlues",
"P_C_M_R_RRMatron",
"P_C_M_R_RRReaper",
"P_C_M_R_RRFinalFugue",
"P_C_M_R_RRTwombtorial",
"P_C_M_R_RRPortamello",
"P_C_M_R_DLCApricot01",
"P_C_M_R_DLCApricot02",
"P_C_M_R_DLCApricot03",
"P_C_H_R_RRDiscoDisaster",
"P_C_H_R_RRElusional",
"P_C_H_R_RRVisualizeYourself",
"P_C_H_R_RRSpookhousePop",
"P_C_H_R_RROmandOn",
"P_C_H_R_RRMorningDove",
"P_C_H_R_RRHephsMess",
"P_C_H_R_RRAmalgamaniac",
"P_C_H_R_RRHangTenHeph",
"P_C_H_R_RRCountFunkula",
"P_C_H_R_RROverthinker",
"P_C_H_R_RRCryp2que",
"P_C_H_R_RRNocturning",
"P_C_H_R_RRGlassCages",
"P_C_H_R_RRHallowQueen",
"P_C_H_R_RRProgenitor",
"P_C_H_R_RRMatriarch",
"P_C_H_R_RRThunder",
"P_C_H_R_RREldritchHouse",
"P_C_H_R_RRRavevenge",
"P_C_H_R_RRRiftWithin",
"P_C_H_R_RRSuzusQuest",
"P_C_H_R_RRNecropolis",
"P_C_H_R_RRBaboosh",
"P_C_H_R_RRNecroSonatica",
"P_C_H_R_RRHarmonie",
"P_C_H_R_RRDeepBlues",
"P_C_H_R_RRMatron",
"P_C_H_R_RRReaper",
"P_C_H_R_RRFinalFugue",
"P_C_H_R_RRTwombtorial",
"P_C_H_R_RRPortamello",
"P_C_H_R_DLCApricot01",
"P_C_H_R_DLCApricot02",
"P_C_H_R_DLCApricot03",
"P_C_X_R_RRDiscoDisaster",
"P_C_X_R_RRElusional",
"P_C_X_R_RRVisualizeYourself",
"P_C_X_R_RRSpookhousePop",
"P_C_X_R_RROmandOn",
"P_C_X_R_RRMorningDove",
"P_C_X_R_RRHephsMess",
"P_C_X_R_RRAmalgamaniac",
"P_C_X_R_RRHangTenHeph",
"P_C_X_R_RRCountFunkula",
"P_C_X_R_RROverthinker",
"P_C_X_R_RRCryp2que",
"P_C_X_R_RRNocturning",
"P_C_X_R_RRGlassCages",
"P_C_X_R_RRHallowQueen",
"P_C_X_R_RRProgenitor",
"P_C_X_R_RRMatriarch",
"P_C_X_R_RRThunder",
"P_C_X_R_RREldritchHouse",
"P_C_X_R_RRRavevenge",
"P_C_X_R_RRRiftWithin",
"P_C_X_R_RRSuzusQuest",
"P_C_X_R_RRNecropolis",
"P_C_X_R_RRBaboosh",
"P_C_X_R_RRNecroSonatica",
"P_C_X_R_RRHarmonie",
"P_C_X_R_RRDeepBlues",
"P_C_X_R_RRMatron",
"P_C_X_R_RRReaper",
"P_C_X_R_RRFinalFugue",
"P_C_X_R_RRTwombtorial",
"P_C_X_R_RRPortamello",
"P_C_X_R_DLCApricot01",
"P_C_X_R_DLCApricot02",
"P_C_X_R_DLCApricot03",
"P_C_E_RS_RRDiscoDisaster",
"P_C_E_RS_RRElusional",
"P_C_E_RS_RRVisualizeYourself",
"P_C_E_RS_RRSpookhousePop",
"P_C_E_RS_RROmandOn",
"P_C_E_RS_RRAmalgamaniac",
"P_C_E_RS_RRCountFunkula",
"P_C_E_RS_RROverthinker",
"P_C_E_RS_RRGlassCages",
"P_C_E_RRDiscoDisaster",
"P_C_E_RRElusional",
"P_C_E_RRVisualizeYourself",
"P_C_E_RRSpookhousePop",
"P_C_E_RROmandOn",
"P_C_E_RRMorningDove",
"P_C_E_RRHephsMess",
"P_C_E_RRAmalgamaniac",
"P_C_E_RRHangTenHeph",
"P_C_E_RRCountFunkula",
"P_C_E_RROverthinker",
"P_C_E_RRCryp2que",
"P_C_E_RRNocturning",
"P_C_E_RRGlassCages",
"P_C_E_RRHallowQueen",
"P_C_E_RRProgenitor",
"P_C_E_RRMatriarch",
"P_C_E_RRThunder",
"P_C_E_RREldritchHouse",
"P_C_E_RRRavevenge",
"P_C_E_RRRiftWithin",
"P_C_E_RRSuzusQuest",
"P_C_E_RRNecropolis",
"P_C_E_RRBaboosh",
"P_C_E_RRNecroSonatica",
"P_C_E_RRHarmonie",
"P_C_E_RRDeepBlues",
"P_C_E_RRMatron",
"P_C_E_RRReaper",
"P_C_E_RRFinalFugue",
"P_C_E_RRTwombtorial",
"P_C_E_RRPortamello",
"P_C_E_DLCApricot01",
"P_C_E_DLCApricot02",
"P_C_E_DLCApricot03",
"P_C_M_RRDiscoDisaster",
"P_C_M_RRElusional",
"P_C_M_RRVisualizeYourself",
"P_C_M_RRSpookhousePop",
"P_C_M_RROmandOn",
"P_C_M_RRMorningDove",
"P_C_M_RRHephsMess",
"P_C_M_RRAmalgamaniac",
"P_C_M_RRHangTenHeph",
"P_C_M_RRCountFunkula",
"P_C_M_RROverthinker",
"P_C_M_RRCryp2que",
"P_C_M_RRNocturning",
"P_C_M_RRGlassCages",
"P_C_M_RRHallowQueen",
"P_C_M_RRProgenitor",
"P_C_M_RRMatriarch",
"P_C_M_RRThunder",
"P_C_M_RREldritchHouse",
"P_C_M_RRRavevenge",
"P_C_M_RRRiftWithin",
"P_C_M_RRSuzusQuest",
"P_C_M_RRNecropolis",
"P_C_M_RRBaboosh",
"P_C_M_RRNecroSonatica",
"P_C_M_RRHarmonie",
"P_C_M_RRDeepBlues",
"P_C_M_RRMatron",
"P_C_M_RRReaper",
"P_C_M_RRFinalFugue",
"P_C_M_RRTwombtorial",
"P_C_M_RRPortamello",
"P_C_M_DLCApricot01",
"P_C_M_DLCApricot02",
"P_C_M_DLCApricot03",
"P_C_H_RRDiscoDisaster",
"P_C_H_RRElusional",
"P_C_H_RRVisualizeYourself",
"P_C_H_RRSpookhousePop",
"P_C_H_RROmandOn",
"P_C_H_RRMorningDove",
"P_C_H_RRHephsMess",
"P_C_H_RRAmalgamaniac",
"P_C_H_RRHangTenHeph",
"P_C_H_RRCountFunkula",
"P_C_H_RROverthinker",
"P_C_H_RRCryp2que",
"P_C_H_RRNocturning",
"P_C_H_RRGlassCages",
"P_C_H_RRHallowQueen",
"P_C_H_RRProgenitor",
"P_C_H_RRMatriarch",
"P_C_H_RRThunder",
"P_C_H_RREldritchHouse",
"P_C_H_RRRavevenge",
"P_C_H_RRRiftWithin",
"P_C_H_RRSuzusQuest",
"P_C_H_RRNecropolis",
"P_C_H_RRBaboosh",
"P_C_H_RRNecroSonatica",
"P_C_H_RRHarmonie",
"P_C_H_RRDeepBlues",
"P_C_H_RRMatron",
"P_C_H_RRReaper",
"P_C_H_RRFinalFugue",
"P_C_E_RS_CD_RRDiscoDisaster",
"P_C_E_RS_CD_RRHephsMess",
"P_C_E_RS_CD_RRThunder",
"P_C_E_RS_CD_RRTwombtorial",
"P_C_E_RS_CD_RRPortamello",
"P_C_E_RS_CD_DLCApricot01",
"P_C_E_RS_CD_DLCApricot02",
"P_C_E_RS_CD_DLCApricot03",
"P_C_M_RS_CD_RRThunder",
"P_C_M_RS_CD_RRTwombtorial",
"P_C_M_RS_CD_RRPortamello",
"P_C_M_RS_CD_DLCApricot01",
"P_C_M_RS_CD_DLCApricot02",
"P_C_M_RS_CD_DLCApricot03",
"P_C_H_RS_CD_RRThunder",
"P_C_H_RS_CD_RRRavevenge",
"P_C_X_RS_RRProgenitor",
"P_C_X_RS_RRMatriarch",
"P_C_X_RS_RRThunder",
"P_C_X_RS_RRRavevenge",
"P_C_X_RS_RRSuzusQuest",
"P_C_X_RS_RRNecropolis",
"P_C_X_RS_RRBaboosh",
"P_C_X_RS_RRNecroSonatica",
"P_C_X_RS_RRHarmonie",
"P_C_X_RS_RRDeepBlues",
"P_C_X_RS_RRMatron",
"P_C_X_RS_RRReaper",
"P_C_X_RS_RRFinalFugue",
"P_C_X_RS_RRPortamello",
"P_C_X_RS_DLCApricot01",
"P_C_E_CD_RRDiscoDisaster",
"P_C_E_CD_RRElusional",
"P_C_E_CD_RRVisualizeYourself",
"P_C_E_CD_RRSpookhousePop",
"P_C_E_CD_RROmandOn",
"P_C_E_CD_RRMorningDove",
"P_C_E_CD_RRHephsMess",
"P_C_E_CD_RRAmalgamaniac",
"P_C_E_CD_RRHangTenHeph",
"P_C_E_CD_RRCountFunkula",
"P_C_E_CD_RROverthinker",
"P_C_E_CD_RRCryp2que",
"P_C_E_CD_RRNocturning",
"P_C_E_CD_RRGlassCages",
"P_C_E_CD_RRHallowQueen",
"P_C_E_CD_RRProgenitor",
"P_C_E_CD_RRMatriarch",
"P_C_E_CD_RRThunder",
"P_C_E_CD_RREldritchHouse",
"P_C_E_CD_RRRavevenge",
"P_C_E_CD_RRRiftWithin",
"P_C_E_CD_RRSuzusQuest",
"P_C_E_CD_RRNecropolis",
"P_C_E_CD_RRBaboosh",
"P_C_E_CD_RRNecroSonatica",
"P_C_E_CD_RRHarmonie",
"P_C_E_CD_RRDeepBlues",
"P_C_E_CD_RRMatron",
"P_C_E_CD_RRReaper",
"P_C_E_CD_RRFinalFugue",
"P_C_E_CD_RRTwombtorial",
"P_C_E_CD_RRPortamello",
"P_C_E_CD_DLCApricot01",
"P_C_E_CD_DLCApricot02",
"P_C_E_CD_DLCApricot03",
"P_C_M_CD_RRDiscoDisaster",
"P_C_M_CD_RRElusional",
"P_C_M_CD_RRVisualizeYourself",
"P_C_M_CD_RRSpookhousePop",
"P_C_M_CD_RROmandOn",
"P_C_M_CD_RRMorningDove",
"P_C_M_CD_RRHephsMess",
"P_C_M_CD_RRAmalgamaniac",
"P_C_M_CD_RRHangTenHeph",
"P_C_M_CD_RRCountFunkula",
"P_C_M_CD_RROverthinker",
"P_C_M_CD_RRCryp2que",
"P_C_M_CD_RRNocturning",
"P_C_M_CD_RRGlassCages",
"P_C_M_CD_RRHallowQueen",
"P_C_M_CD_RRProgenitor",
"P_C_M_CD_RRMatriarch",
"P_C_M_CD_RRThunder",
"P_C_M_CD_RREldritchHouse",
"P_C_M_CD_RRRavevenge",
"P_C_M_CD_RRRiftWithin",
"P_C_M_CD_RRSuzusQuest",
"P_C_M_CD_RRNecropolis",
"P_C_M_CD_RRBaboosh",
"P_C_M_CD_RRNecroSonatica",
"P_C_M_CD_RRHarmonie",
"P_C_M_CD_RRDeepBlues",
"P_C_M_CD_RRMatron",
"P_C_M_CD_RRReaper",
"P_C_M_CD_RRFinalFugue",
"P_C_M_CD_RRTwombtorial",
"P_C_M_CD_RRPortamello",
"P_C_M_CD_DLCApricot01",
"P_C_M_CD_DLCApricot02",
"P_C_M_CD_DLCApricot03",
"P_C_H_CD_RRDiscoDisaster",
"P_C_H_CD_RRElusional",
"P_C_H_CD_RRVisualizeYourself",
"P_C_H_CD_RRSpookhousePop",
"P_C_H_CD_RROmandOn",
"P_C_H_CD_RRMorningDove",
"P_C_H_CD_RRHephsMess",
"P_C_H_CD_RRAmalgamaniac",
"P_C_H_CD_RRHangTenHeph",
"P_C_H_CD_RRCountFunkula",
]

var last_update = "2025-03-26 23:54:57"

var all_charts = {
	"RRDiscoDisaster":{ "name": "Disco Disaster"},
	"RRElusional":{ "name": "Elusional"},
	"RRVisualizeYourself":{ "name": "Visualize Yourself"},
	"RRSpookhousePop":{ "name": "Spookhouse Pop"},
	"RROmandOn":{ "name": "Om and On"},
	"RRMorningDove":{ "name": "Morning Dove"},
	"RRHephsMess":{ "name": "Heph's Mess"},
	"RRAmalgamaniac":{ "name": "Amalgamaniac"},
	"RRHangTenHeph":{ "name": "Hang Ten Heph"},
	"RRCountFunkula":{ "name": "Count Funkula"},
	"RROverthinker":{ "name": "Overthinker"},
	"RRCryp2que":{ "name": "Cryp2que"},
	"RRNocturning":{ "name": "Nocturning"},
	"RRGlassCages":{ "name": "Glass Cages"},
	"RRHallowQueen":{ "name": "Hallow Queen"},
	"RRProgenitor":{ "name": "Progenitor"},
	"RRMatriarch":{ "name": "Matriarch"},
	"RRThunder":{ "name": "Under The Thunder"},
	"RREldritchHouse":{ "name": "Eldritch House"},
	"RRRavevenge":{ "name": "Ravevenge"},
	"RRRiftWithin":{ "name": "Rift Within"},
	"RRSuzusQuest":{ "name": "Suzu's Quest"},
	"RRNecropolis":{ "name": "Necropolis"},
	"RRBaboosh":{ "name": "Baboosh"},
	"RRNecroSonatica":{ "name": "Necro Sonatica"},
	"RRHarmonie":{ "name": "She Banned"},
	"RRDeepBlues":{ "name": "King's Ruse"},
	"RRMatron":{ "name": "What's In The Box"},
	"RRReaper":{ "name": "Brave The Harvester"},
	"RRFinalFugue":{ "name": "Final Fugue"},
	"RRTwombtorial":{ "name": "Twombtorial"},
	"RRPortamello":{ "name": "Portamello"},
	"DLCApricot01":{ "name": "Slugger's Refrain"},
	"DLCApricot02":{ "name": "Got Danged"},
	"DLCApricot03":{ "name": "Bootus Bleez"},
}

function sort_leaderboard_avg_rank(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(a.getElementsByClassName("average_rank")[0].textContent) - Number(b.getElementsByClassName("average_rank")[0].textContent) } ).forEach( element => { lb.appendChild(element); });
}

function sort_leaderboard_firsts(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(b.getElementsByClassName("first_places")[0].textContent) - Number(a.getElementsByClassName("first_places")[0].textContent) } ).forEach( element => { lb.appendChild(element); });
}

function sort_leaderboard_score(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(b.getElementsByClassName("rank_score")[0].score) - Number(a.getElementsByClassName("rank_score")[0].score) } ).forEach( element => { lb.appendChild(element); });
}


function get_acc_for_score( score, is_cheater ){

	var basic_score = 0
	for( mult in score.InputMults ){
		var multiplied_score = score.InputMults[mult]
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.oks ) * 111
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.goods ) * 222
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.greats ) * 333
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.perfects ) * 555
	}
	basic_score += Number( score.holds_hit ) * 333
	
	var bonus_points = (score.score - basic_score) / 2.0

	if( score.dnf || is_cheater ){
		bonus_points = 0
	}

	var acc = 0
	var possible_acc = 0

	possible_acc += score.total_perfects * 1.0
	possible_acc += score.total_greats * 1.0
	possible_acc += score.total_goods * 1.0
	possible_acc += score.total_oks * 1.0
	possible_acc += score.total_misses * 1.0
	
	acc += bonus_points * 1.0
	acc += (score.total_perfects-bonus_points) * 0.99
	acc += score.total_greats * .8
	acc += score.total_goods * .5
	acc += score.total_oks * .3
	acc += score.total_misses * 0

	var acc_percentage = 0
	if( possible_acc > 0 ){
		acc_percentage = acc / possible_acc
	}

	return Number(acc_percentage)

}

function friendly_lb( lb_name ){
	var lb_name = lb_name.slice(4)
	var data = lb_name.split("_")
	var diff = data[0]
	var coda = false
	var remix = false
	var remix_seeded = false
	if( data.includes("CD") ){
		coda = true
	}
	if( data.includes("R") ){
		remix = true
	}
	if( data.includes("RS") ){
		remix_seeded = true
	}
	var chart = data[ data.length-1 ]
	
	var chart_name = all_charts[chart].name

	if( diff == "E" ){ chart_name += " E"	}
	if( diff == "M" ){ chart_name += " M"	}
	if( diff == "H" ){ chart_name += " H"	}
	if( diff == "X" ){ chart_name += " X"	}

	if( remix ){ chart_name += " 🌀"}
	if( remix_seeded ){ chart_name += " 🌱"}
	if( coda ){ chart_name += " 🎯"}
	return chart_name

}

function generate_row_manual(leaderboard_table, rank, name, score, accuracy, details, vibe, rows, is_cheater, player_id ){
	var trow = document.createElement("div")
	
	if( is_cheater ){ 
		trow.classList.add("table-cheater") 
	} else {
		trow.classList.add("table-row")
	}


	var tgrid = document.createElement("div")
	tgrid.classList.add("table-grid")

	trow.appendChild(tgrid)

	var rank_div = document.createElement("div")
	if( is_cheater ){
		rank_div.appendChild( document.createTextNode( "-" ) );
	} else {
		rank_div.appendChild( document.createTextNode( rank ) );
	}
	
	tgrid.appendChild(rank_div)

	var pname = document.createElement("div")
	pname.classList.add("span-2")
	pname.classList.add("clickable")
	pname.addEventListener('click', showPlayerDetails, false )
	pname.player_id = player_id
	pname.appendChild( document.createTextNode( name ) );
	tgrid.appendChild(pname)

	var pscore = document.createElement("div")
	pscore.classList.add("span-2")
	pscore.classList.add("rank_score")
	pscore.score = score
	pscore.appendChild( document.createTextNode( score.toLocaleString() ) );

	tgrid.appendChild(pscore)

	var acc_percentage = accuracy

	var acc_data = (acc_percentage * 100).toFixed(4)+"%"
	var acc_table = document.createElement("div")
	acc_table.appendChild( document.createTextNode(acc_data) );

	tgrid.appendChild(acc_table)

	

	var flag_table = document.createElement("div")
	flag_table.classList.add("first_places")
	flag_table.appendChild( document.createTextNode( details ) );
	tgrid.appendChild(flag_table)

	var vibe_table = document.createElement("div")
	vibe_table.classList.add("average_rank")
	vibe_table.appendChild( document.createTextNode( vibe ) );
	tgrid.appendChild(vibe_table)

	leaderboard_table.appendChild(trow)
}

function generate_row( leaderboard_table, score, rows, replace_name_with_board=false ){
	var is_cheater = false
	if( score.cheated ){ is_cheater = true }
	if( Number(score.vibe_duration) > Number(score.vibe_chains_hit) * 5.35 ){ is_cheater = true }

	var trow = document.createElement("div")
	if( is_cheater ){ trow.classList.add("table-cheater") }
	trow.classList.add("table-row")
	if( rows % 2 == 0 ){
		trow.classList.add("table-dark")
	} else {
		trow.classList.add("table-light")
	}


	var tgrid = document.createElement("div")
	tgrid.classList.add("table-grid")

	trow.appendChild(tgrid)

	var rank = document.createElement("div")
	if( is_cheater ){
		rank.appendChild( document.createTextNode( "-" ) );
	} else {
		rank.appendChild( document.createTextNode( Number(score.rank)+1 ) );
	}
	
	tgrid.appendChild(rank)

	var pname = document.createElement("div")
	pname.classList.add("span-2")
	if( !replace_name_with_board ){ 
		pname.classList.add("clickable")
		pname.addEventListener('click', showPlayerDetails, false )
		pname.player_id = score.player_id
		pname.appendChild( document.createTextNode( score.player_name ) );
	} else {
		pname.appendChild( document.createTextNode( friendly_lb(score.board) ) );
	}
	tgrid.appendChild(pname)

	var pscore = document.createElement("div")
	pscore.classList.add("span-2")
	pscore.appendChild( document.createTextNode( score.score.toLocaleString() ) );

	var max_combo = document.createElement("span")
	max_combo.classList.add("small-text")
	max_combo.classList.add("left-spacer")
	max_combo.appendChild( document.createTextNode( score.max_combo + "x COMBO +" + score.holds_hit + " WYRMS" ) );
	pscore.appendChild( max_combo )

	tgrid.appendChild(pscore)

	var acc_percentage = get_acc_for_score( score, is_cheater )

	var average = score.average * 1000

	var acc_data = (acc_percentage * 100).toFixed(4)+"%"
	var avg_sign = ""
	var acc_split = acc_data.split(".")
	if( average > 0 ){
		avg_sign = "+"
	} else {
		avg_sign = "-"
	}
	acc_data = Math.abs(average).toFixed(1)+"ms"
	var avg_split = acc_data.split(".")

	var acc_table = document.createElement("div")
	acc_table.classList.add("tooltip")

	var acc_big = document.createElement("span")
	acc_big.appendChild( document.createTextNode( acc_split[0] ) )
	acc_table.appendChild( acc_big );

	var acc_small = document.createElement("span")
	acc_small.classList.add("small-text")
	acc_small.appendChild( document.createTextNode( "."+acc_split[1] ) )
	acc_table.appendChild( acc_small );

	var avg_big = document.createElement("span")
	avg_big.appendChild( document.createTextNode( " " + avg_sign + avg_split[0] ) )
	acc_table.appendChild( avg_big );

	var avg_small = document.createElement("span")
	avg_small.classList.add("small-text")
	avg_small.appendChild( document.createTextNode( "."+avg_split[1] ) )
	acc_table.appendChild( avg_small );

	var acc_tooltip = document.createElement("div")
	acc_tooltip.classList.add("tooltiptext")
	acc_tooltip.classList.add("flex-col")
	if( rows > 5 ){
		acc_tooltip.classList.add("tooltip-top-override")
	}

	var tt_text = ""
	var tt_total = document.createElement("span")
	tt_total.appendChild( document.createTextNode( score.total_perfects + " | "+score.total_greats+" | "+score.total_goods+" | "+score.total_oks+" | "+score.total_misses ) )
	tt_total.classList.add("full-width")
	acc_tooltip.appendChild( tt_total )

	for( imult in score.InputMults ){
		var input_data = score.InputMults[imult]
		var mult = input_data.mult

		var tt_subheader = document.createElement("span")
		
		tt_subheader.appendChild( document.createTextNode( mult + "x" ) )
		tt_subheader.classList.add("full-width")
		tt_subheader.classList.add("small-text")
		tt_subheader.classList.add("tooltip-underline")
		acc_tooltip.appendChild( tt_subheader )

		var tt_subdata = document.createElement("span")
		tt_subdata.appendChild( document.createTextNode( input_data.perfects + " | "+input_data.greats+" | "+input_data.goods+" | "+input_data.oks+" | "+input_data.misses ) )
		tt_subdata.classList.add("full-width")
		acc_tooltip.appendChild( tt_subdata )
	}

	acc_table.appendChild( acc_tooltip )

	tgrid.appendChild(acc_table)

	leaderboard_table.appendChild(trow)

	var flag = ""
	if ( score.fc ){
		flag = "FC"
		if( score.total_oks == 0 && score.total_goods == 0 ){
			if( score.total_greats < 10 ){
				flag = "SDG"
			}
		}
	} else {
		if( score.total_misses < 10 ){
			flag = "SDCB"
		}
	}
	if( score.pfc ){
		flag = "PFC"
	}

	if( score.dnf ){
		flag = "DNF"
	} 

	var base_score = score.base_score
	var total_score = score.score
	var rating = "D "
	if( total_score > base_score * 2 ){
		rating = "C "
	}
	if( total_score > base_score * 3 ){
		rating = "B "
	}
	if( total_score > base_score * 4 ){
		rating = "A "
	}
	if( total_score > base_score * 5.5 ){
		rating = "S "
	}
	if( total_score > base_score * 6.5 ){
		rating = "S+"
	}

	if( is_cheater ){
		flag = "CHEATED"
	}

	var flag_table = document.createElement("div")
	flag_table.appendChild( document.createTextNode( rating + " " + flag ) );
	tgrid.appendChild(flag_table)

	var vt = ""
	for( t in score.vibe_times ){
		var time = score.vibe_times[t].toFixed(1)
		vt += time
		if( t != score.vibe_times.length-1 ){
			vt += " | "
		}
	}

	var vibe_table = document.createElement("div")
	vibe_table.classList.add("span-2")
	vibe_table.classList.add("small-text")
	vibe_table.appendChild( document.createTextNode( vt ) );
	tgrid.appendChild(vibe_table)

	return is_cheater
}

function generate_leaderboards( json_objects ) {
	var leaderboard_table = document.getElementById("leaderboard")
	var legend = document.getElementById('lb_legend')
	legend.classList.remove("show-regular")
	legend.classList.remove("show-ranked")
	var rows = 0
	if( json_objects.length == 1 ){
		legend.classList.add("show-regular")
		//just list scores
		var lb = json_objects[0]
		var rank = 0
		//console.log(lb)

		for( s in lb.scores ){
			var score = lb.scores[s]
			score.rank = rank

			//console.log(score)
			if( !generate_row( leaderboard_table, score, rows ) ){
				rank += 1
			} else {
				if( hide_cheaters ) rows -= 1;
			}
			rows += 1
		}
		//console.log(lb)
	} else {
		//calc a rating
		legend.classList.add("show-ranked")
		var players = {}

		for( idx in json_objects ){
			var lb = json_objects[idx]
			var scores = lb.scores

			var first_score = scores[0]
			var last_score = scores[ scores.length-1 ]
			var diff = first_score.score-last_score.score

			for( s in scores ){
				var score = scores[s]
				var rel_score = (score.score-last_score.score)/diff

				if( players[score.player_id] == undefined ){
					players[score.player_id] = {}
					players[score.player_id]["player_id"] = score.player_id
					players[score.player_id]["player_name"] = score.player_name
					players[score.player_id]["acc"] = 0
					players[score.player_id]["rank"] = 0
					players[score.player_id]["firsts"] = 0
					players[score.player_id]["scores"] = 0
					players[score.player_id]["score"] = 0
					players[score.player_id]["is_cheater"] = false
				}
				players[score.player_id]["score"] += Math.floor( rel_score * rel_score * 10000 )
				players[score.player_id]["acc"] += get_acc_for_score( score, false )
				players[score.player_id]["scores"] += 1
				players[score.player_id]["rank"] += Number(s)+1
				if( s == 0 ){ players[score.player_id]["firsts"] += 1 }

				if( score.cheated ){ players[score.player_id]["is_cheater"] = true }
				if( Number(score.vibe_duration) > Number(score.vibe_chains_hit) * 5.35 ){ players[score.player_id]["is_cheater"] = true }

			}
		}

		p_array = Object.values( players )
		p_array.sort( (a,b) => { return Number(b.score) - Number(a.score) }) 

		var cheaters = 0

		for( s in p_array ){
			var score = p_array[s]

			var acc = players[score.player_id]["acc"] / players[score.player_id]["scores"]
			var avg_rank = Number(score["rank"])  / Number(players[score.player_id]["scores"])
			avg_rank = avg_rank.toFixed(1)
			generate_row_manual( leaderboard_table, Number(s)+1-cheaters, score["player_name"], score["score"], acc, score["firsts"], avg_rank, (Number(s)+cheaters)%2, score["is_cheater"], score["player_id"] )

			if( score["is_cheater"] ) cheaters += 1
		}


	}
}

function repopulate_leaderboard(){
	var prod = ["P_C_"]

	var charts = []
	if( selected_chart == "RR-All" ){
		for( c in all_charts ){
			charts.push(c)
		}
	} else {
		charts.push( selected_chart )
	}


	var diffs = []
	switch( selected_diff ){
	case "Diff-All": 
		diffs = ["E_", "M_", "H_", "X_"]
		break;
    case "DiffEasy":
    	diffs = ["E_"]
    	break;
    case "DiffMed":
    	diffs = ["M_"]
		break;
    case "DiffHard":
    	diffs = ["H_"]
		break;
    case "DiffImpossible":
    	diffs = ["X_"]
		break;
	}

	var mods = []
	switch( selected_coda ){
	case "Coda-All": 
		mods = ["", "CD_"]
		break;
    case "NonCoda":
    	mods = [""]
    	break;
    case "Coda":
    	mods = ["CD_"]
		break;
	}

	var remixes = []
	switch( selected_remix ){
	case "Remix-All": 
		remixes = ["", "R_", "RS_"]
		break;
    case "NonRemix":
    	remixes = [""]
    	break;
    case "Remix":
    	remixes = ["R_"]
		break;
    case "RemixSeeded":
    	remixes = ["RS_"]
		break;
	}

	var boards = []
	for( p in prod ){
		for( r in remixes ){
			for( m in mods ){
				for( d in diffs ){
					for( c in charts ){
						var l_id = ""+prod[p]+diffs[d]+remixes[r]+mods[m]+charts[c]
						if( valid_boards.indexOf(l_id) > -1 ){
							var b = 'leaderboards/'+l_id+'.json'
							boards.push(b)		
						}									
					}					
				}
			}
		}
	}

	var scount = document.getElementById("score_count")
	scount.innerHTML = ""
	var lb = document.getElementById("leaderboard")
	lb.innerHTML = "";
	//console.log( boards )

	var promises = boards.map(board => fetch(board))
	
	Promise.all(promises)
	.then( responses => Promise.all( responses.map(r => r.json() ) ) )
	.then( jsonObjects => generate_leaderboards(jsonObjects) )
}

function updateChart(){
	var e = document.getElementById("chart")
	selected_chart = e.value;

	repopulate_leaderboard();
}

function updateDifficulty(){
	var e = document.getElementById("diff")
	selected_diff = e.value;

	repopulate_leaderboard();
}

function updateRemix(){
	var e = document.getElementById("remix")
	selected_remix = e.value;

	repopulate_leaderboard();
}

function updateCoda(){
	var e = document.getElementById("coda")
	selected_coda = e.value;

	repopulate_leaderboard();
}

function toggleCheaters(){
	var c = document.getElementById("cheat_toggle") 
	var e = document.getElementById("leaderboard")

	if( c.checked ){
		e.classList.add("show-cheaters")
	} else {
		e.classList.remove("show-cheaters")
	}
}

function listCharts(){
	var footer = document.getElementById("footer")
	footer.appendChild( document.createTextNode( "Last API Fetch : " + last_update + " UTC" ) )

	var rank_average = document.getElementById("rank-avg-legend")
	rank_average.classList.add("clickable")
	rank_average.addEventListener('click', sort_leaderboard_avg_rank, false )


	var rank_firsts = document.getElementById("rank-first-legend")
	rank_firsts.classList.add("clickable")
	rank_firsts.addEventListener('click', sort_leaderboard_firsts, false )

	var rank_scores = document.getElementById("rank-score-legend")
	rank_scores.classList.add("clickable")
	rank_scores.addEventListener('click', sort_leaderboard_score, false )

	var rank_rank = document.getElementById("rank-rank-legend")
	rank_rank.classList.add("clickable")
	rank_rank.addEventListener('click', sort_leaderboard_score, false )

	var e = document.getElementById("chart")

	var items = Object.keys(all_charts).map(function(key) {
  		return [key, all_charts[key]];
	});

	items.sort(function(first, second) {
  		return second[1].name < first[1].name;
	});

	for( i in items ){
		item = items[i]
		var n = item[1].name

		var opt = document.createElement("option")
		opt.value = item[0]
		var text = document.createTextNode(n);
		opt.appendChild(text);
		e.appendChild(opt);
	}

}

function get_player_scores( json_objects, pid ){
	var scores = []
	var leaderboard_table = document.getElementById("leaderboard")
	var scount = document.getElementById("score_count")
	var count = 0
	var player_name = ""
	rows = 0
	for( j in json_objects ){
		var json = json_objects[j]

		for( s in json.scores ){
			var score = json.scores[s]
			if( score.player_id == pid ){
				score.board = json.name
				score.rank = s
				scores.push( score )
				player_name = score.player_name
				count += 1
			}
		}
	}

	scount.innerHTML = ""
	scount.appendChild( document.createTextNode( player_name + " has " + count + " scores" ) )

	scores.sort( (a,b) => { return Number(a.rank) > Number(b.rank) } )

	leaderboard_table.innerHTML = ""
	for( score in scores ){
		generate_row(leaderboard_table, scores[score], rows, replace_name_with_board=true)
		rows += 1
	}
	
}

function showPlayerDetails( evt ){
	var legend = document.getElementById('lb_legend')
	legend.classList.remove("show-regular")
	legend.classList.remove("show-ranked")
	legend.classList.add("show-regular")

	var pid = evt.currentTarget.player_id

	var boards = []
	for( b in valid_boards ){	
		boards.push('leaderboards/'+valid_boards[b]+'.json')		
	}

	var promises = boards.map(board => fetch(board))
	
	Promise.all(promises)
	.then( responses => Promise.all( responses.map(r => r.json() ) ) )
	.then( jsonObjects => get_player_scores(jsonObjects, pid) )
}