const Source = require("./source.js");

const ky = require("ky").default;
const yaml = require("js-yaml");

class ReactSource extends Source {
	constructor(name, repo, directory) {
		super(name);

		this.repo = repo;
		this.directory = directory;
	}

	async fetchNavRaw() {
		const response = await ky(`https://raw.githubusercontent.com/${this.repo}/master/${this.directory}/nav.yml`);
		const body = await response.text();

		const parsed = yaml.safeLoad(body);
		const flat = parsed.flatMap(item => item.items);

		return flat;
	}

	async fetchPageRaw(id) {
		const response = await ky(`https://raw.githubusercontent.com/${this.repo}/master/${this.directory}/${id}.md`);
		const body = await response.text();

		return body;
	}
}
module.exports = ReactSource;