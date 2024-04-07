import { HeadStyleItem } from "./HeadStyleItem";


let counter = 0;

export class HeadStyle {
	constructor(itemsMap) {
		
		for (const [ name, make ] of itemsMap.filter(Boolean))
			this.items.push(this.items[name] = new HeadStyleItem(name, make));
		
		this.node.dataset.headStyle = "";
		this.node.dataset.meta = this.id;
		
		this.update();
		
		this.mount();
		
	}
	
	id = (counter++).toString();
	
	class = `head-style-${this.id}`;
	
	node = document.createElement("style");
	
	items = [];
	
	update(list) {
		if (typeof list == "string")
			list = [ list ];
		
		const css = [];
		let changed = false;
		
		for (const item of this.items) {
			if (!list || list.includes(item.name))
				if (item.update())
					changed = true;
			
			css.push(item.css);
		}
		
		if (changed) {
			this.node.textContent = `\n.${this.class} {\n${css.join("\n")}}\n`;
			
			return true;
		}
		
		return false;
	}
	
	mount() {
		
		document.head.appendChild(this.node);
		
	}
	
	unmount() {
		
		this.node.remove();
		
	}
	
}
