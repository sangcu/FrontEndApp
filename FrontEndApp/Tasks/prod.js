module.exports = {
    directory: "Scripts/dist",
    style: {
        input: [],
        output: []
    },
    script: {
        core: {
            input: ['Scripts/vendors/jquery/dist/jquery.min.js', 'Scripts/vendors/ember/ember-template-compiler.js', 'Scripts/vendors/ember/ember.min.js'],
            output: "core.js"
        },
        app: {
            input: ['Scripts/app/_appInitialize.js', 'Scripts/app/**/*.js'],
            output: "app.js"
        }
    }
}