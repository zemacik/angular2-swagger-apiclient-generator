import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesPridajVydavokCommand {
		ucetId: number;
		suma: number;
		kategoriaVydavkuId: number;
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
		opakovatKazdyMesiac: boolean;
		ocakavatKazdyMesiac: boolean;
		nezohladnovatVPrehladoch: boolean;
		kontrolovatZaruku: boolean;
		dlzkaZarukyVRokoch: number;
		vytvorenyZoSablonyVydavokId: number;
		jePrevodMedziUctami: boolean;
		cielovyUcetId: number;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}