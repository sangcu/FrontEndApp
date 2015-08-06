module.exports = {
    directory: "Scripts/dist",
    style: {
        input: [],
        output: []
    },
    script: {
        core: {
            input: ['Scripts/vendors/ember/ember.js', 'Scripts/vendors/jquery/dist/jquery.js'],
            output: "core.js"
        },
        app: {
            input: ['Scripts/app/**/*.js'],
            output: "app.js"
        }
    }
}