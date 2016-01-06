import { VydavkyInfrastructureCQRSQueryResultMetadata } from "./VydavkyInfrastructureCQRSQueryResultMetadata"
import { VydavkyInfrastructureCQRSRequestResultMetadata } from "./VydavkyInfrastructureCQRSRequestResultMetadata"

export class VydavkyBusinessFeaturesNacitajVydavokResult {
		vydavokId: number;
		ucetId: number;
		ucetNazov: string;
		ucetMenaId: number;
		suma: number;
		kategoriaVydavkuId: number;
		kategoriaVydavkuNazov: string;
		kategoriaVydavkuFarba: string;
		typPlatbyId: number;
		nazov: string;
		poznamka: string;
		datumVydavku: string;
		skupina: string;
		typVydavkuId: number;
		dolezitostId: number;
		vProspech: string;
		jeOcakavany: boolean;
		jeSablona: boolean;
		vytvorenyZoSablonyVydavokId: number;
		opakovatKazdyMesiac: boolean;
		opakovanyNaZakladeVydavkuId: number;
		ocakavatKazdyMesiac: boolean;
		ocakavanyNaZakladeVydavkuId: number;
		nezohladnovatVPrehladoch: boolean;
		kontrolovatZaruku: boolean;
		dlzkaZarukyVRokoch: number;
		datumPridaniaUTC: string;
		pouzivatelPridal: string;
		datumZmenyUTC: string;
		pouzivatelZmenil: string;
		koniecZaruky: string;
		titulok: string;

		queryMetadata: VydavkyInfrastructureCQRSQueryResultMetadata;
		requestMetadata: VydavkyInfrastructureCQRSRequestResultMetadata;
}