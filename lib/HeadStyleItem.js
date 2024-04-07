export class HeadStyleItem {
	constructor(name, make) {
		this.name = name;
		this.make = make;
		
	}
	
	css = "";
	
	update() {
		
		const css = this.make();
		
		if (this.css !== css) {
			this.css = css;
			
			return true;
		}
		
		return false;
	}
	
}
