const execa = require("execa");
const fs = require("fs");

(async () => {
	try {
		await execa("git", ["checkout", "--orphan", "gh-pages"]);
		console.log("Building...");
		await execa("npm", ["run", "build"]);
		console.log("Building Complete");
		console.log("Creating CNAME file with domain");
		execa("echo", ["daviddiaz.dev"]).stdout.pipe(fs.createWriteStream("./dist/CNAME"));
		console.log("Finished creating CNAME file with domain")
		console.log("Committing dist folder");
		await execa("git", ["--work-tree", "dist", "add", "--all"]);
		await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages"]);
		console.log("Finished committing dist folder");
		console.log("Pushing to gh-pages...");
		await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
		await execa("rm", ["-r", "dist"]);
		await execa("git", ["checkout", "-f", "master"]);
		await execa("git", ["branch", "-D", "gh-pages"]);
		console.log("Successfully deployed");
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
})();