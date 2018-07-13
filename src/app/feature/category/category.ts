enum ForAsset { All, Vehicle, Equipment, Property }

export class Category {

	Id: number;
	Name: string;
	AssetType: ForAsset;

	constructor(Name: string, AssetType: ForAsset = ForAsset.All) {
		this.Id = 0;
		this.Name = Name;
		this.AssetType = AssetType;
	}
}