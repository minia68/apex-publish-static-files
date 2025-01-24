const test = require("ava");
const _app = require(".");

const user = "vmorneau";
const password = "xxxxxx";
const connectString = "localhost:1521/servicename"; 

test("application", async (t) => {
	await _app.publish({
		user: user,
		password: password,
		connectString: connectString,
		directory: "./demo/demo-working/",
		appID: 101,
	});

	t.pass();
});

test("workspace", async (t) => {
	await _app.publish({
		user: user,
		password: password,
		connectString: connectString,
		directory: "./demo/demo-working/",
		appID: 101,
		destination: "workspace",
	});

	t.pass();
});

test("theme", async (t) => {
	await _app.publish({
		user: user,
		password: password,
		connectString: connectString,
		directory: "./demo/demo-working/",
		appID: 101,
		destination: "theme",
	});

	t.pass();
});

test("plugin", async (t) => {
	await _app.publish({
		user: user,
		password: password,
		connectString: connectString,
		directory: "./demo/demo-working/",
		appID: 101,
		destination: "plugin",
		pluginName: "ME.VMORNEAU.ANIMAPEX",
	});

	t.pass();
});

test("empty", async (t) => {
	try {
		await _app.publish({
			user: user,
			password: password,
			connectString: connectString,
			directory: "./demo/demo-empty/",
			appID: 101,
		});

		t.pass();
	} catch (error) {
		if (error instanceof Error) {
			t.pass();
		}
	}
});

test("invalid-path", async (t) => {
	try {
		await _app.publish({
			user: user,
			password: password,
			connectString: connectString,
			directory: "./demo/demo-invalid/",
			appID: 101,
		});
	} catch (error) {
		if (error instanceof Error) {
			t.pass();
		}
	}
});

test("file", async (t) => {
	await _app.publish({
		user: user,
		password: password,
		connectString: connectString,
		directory: "./demo/demo-working/js/app.js",
		appID: 101,
	});

	t.pass();
});
