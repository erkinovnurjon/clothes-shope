export interface ProductType  {
	map(arg0: (product: { id: number; quantity: number; }) => { id: number; quantity: number; }): unknown;
	find(arg0: (product: { id: number; }) => boolean): unknown;
	filter: any;
      id:number;
      title:string;
      price : number ;
      description : string ;
      category:string ;
      image:string;
      quantity : number ;
      rating: {rate : number , count : number }

}