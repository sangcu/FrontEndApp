module.exports = {
    style: {
        directory: "Content",
        core: {
            input: ["Scripts/vendors/foundation/css/foundation.css"],
            output: "dist/core.css"
        },
        app: {
            input: ["Content/app/site.scss"],
            output: "dist/site.css"
        }
    },
    script: {
        directory: "Scripts/dist",
        core: {
            input: [
                'Scripts/vendors/jquery/dist/jquery.js',
                'Scripts/vendors/ember/ember-template-compiler.js',
                'Scripts/vendors/ember/ember.debug.js'],
            output: "core.js"
        },
        app: {
            input: ['Scripts/app/_appInitialize.js', 'Scripts/app/**/*.js'],
            output: "app.js"
        }
    }
}