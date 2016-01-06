import { VydavkyInfrastructureCQRSQueryResultMetadata } from "./VydavkyInfrastructureCQRSQueryResultMetadata"
import { VydavkyInfrastructureCQRSRequestResultMetadata } from "./VydavkyInfrastructureCQRSRequestResultMetadata"

export class VydavkyBusinessFeaturesNacitajKategoriuVydavkovResult {
		kategoriaVydavkuId: number;
		ucetId: number;
		ucetNazov: string;
		poradie: number;
		nazov: string;
		farba: string;
		mesacnyRozpocet: number;
		rocnyRozpocet: number;
		datumPridaniaUTC: string;
		pouzivatelPridal: string;
		datumZmenyUTC: string;
		pouzivatelZmenil: string;

		queryMetadata: VydavkyInfrastructureCQRSQueryResultMetadata;
		requestMetadata: VydavkyInfrastructureCQRSRequestResultMetadata;
}