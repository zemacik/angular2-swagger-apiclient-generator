import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesZmenVydavokCommand {
		vydavokId: number;
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

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}