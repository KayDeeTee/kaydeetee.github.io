var selected_chart = "RR-All"
var selected_diff = "DiffImpossible"
var selected_remix = "NonRemix"
var selected_coda = "NonCoda"

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
"P_C_X_RS_CD_RRElusional",
"P_C_X_RS_CD_RRMorningDove",
"P_C_X_RS_CD_RRGlassCages",
"P_C_X_RS_CD_RRHallowQueen",
"P_C_X_RS_CD_RRRavevenge",
"P_C_X_RS_CD_RRBaboosh",
"P_C_X_RS_CD_RRPortamello",
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

var last_update = "2025-03-18 00:54:35"

var all_charts = {
	"RRDiscoDisaster":{ "name": "Disco Disaster"},
	"RRElusional":{ "name": "Elusional"},
	"RRVisualizeYourself":{ "name": "Visualize Yourself"},
	"RRSpookhousePop":{ "name": "Spookhouse Pop"},
	"RROmandOn":{ "name": "Om and Om"},
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
	"RRHarmonie":{ "name": "Harmonie"},
	"RRDeepBlues":{ "name": "Deep Blues"},
	"RRMatron":{ "name": "What's In The Box"},
	"RRReaper":{ "name": "Brave The Harvester"},
	"RRFinalFugue":{ "name": "FinalFugue"},
	"RRTwombtorial":{ "name": "Twombtorial"},
	"RRPortamello":{ "name": "Portamello"},
	"DLCApricot01":{ "name": "Slugger's Refrain"},
	"DLCApricot02":{ "name": "Got Danged"},
	"DLCApricot03":{ "name": "Bootus Bleez"},
}

function generate_leaderboards( json_objects ) {
	var leaderboard_table = document.getElementById("leaderboard")
	var rows = 0
	if( json_objects.length == 1 ){
		//just list scores
		var lb = json_objects[0]

		for( s in lb.scores ){
			var score = lb.scores[s]
			//console.log(score)

			var trow = document.createElement("div")
			trow.classList.add("table-row")
			if( rows % 2 == 0 ){
				trow.classList.add("table-dark")
			} else {
				trow.classList.add("table-light")
			}
			rows += 1

			var tgrid = document.createElement("div")
			tgrid.classList.add("table-grid")

			trow.appendChild(tgrid)

			var rank = document.createElement("div")
			rank.appendChild( document.createTextNode( Number(s)+1 ) );
			tgrid.appendChild(rank)

			var pname = document.createElement("div")
			pname.classList.add("span-2")
			pname.appendChild( document.createTextNode( score.player_name ) );
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

			var acc = 0
			var possible_acc = 0

			possible_acc += score.total_perfects * 1.0
			possible_acc += score.total_greats * 1.0
			possible_acc += score.total_goods * 1.0
			possible_acc += score.total_oks * 1.0
			possible_acc += score.total_misses * 1.0
			
			acc += score.total_perfects * 1.0
			acc += score.total_greats * .8
			acc += score.total_goods * .5
			acc += score.total_oks * .3
			acc += score.total_misses * 0

			var acc_percentage = 0
			if( possible_acc > 0 ){
				acc_percentage = acc / possible_acc
			}

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

			var acc_tooltip = document.createElement("span")
			acc_tooltip.classList.add("tooltiptext")

			var tt_text = ""
			tt_text = score.total_perfects + " | "+score.total_greats+" | "+score.total_goods+" | "+score.total_oks+" | "+score.total_misses

			acc_tooltip.appendChild( document.createTextNode( tt_text ) )
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

			if( score.cheated ){
				flag = "CHEATED"
			}
			if( score.vibe_duration > score.vibes_hit * 5.5 ){
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

		}
		//console.log(lb)
	} else {
		//calc a rating
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


function listCharts(){
	var footer = document.getElementById("footer")
	footer.appendChild( document.createTextNode( "Last API Fetch : " + last_update + " UTC" ) )

	var e = document.getElementById("chart")

	for( c in all_charts ){
		var n = all_charts[c].name

		var opt = document.createElement("option")
		opt.value = c
		var text = document.createTextNode(n);
		opt.appendChild(text);
		e.appendChild(opt);
	}

}