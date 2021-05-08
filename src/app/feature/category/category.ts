enum ForAsset { All, Vehicle, Equipment, Property }

export class Category {

	id: number;
	name: string;
	assetType: ForAsset;

	constructor(name: string, AssetType: ForAsset = ForAsset.All) {
		this.id = 0;
		this.name = name;
		this.assetType = AssetType;
	}
}