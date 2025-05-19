module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended' // 移除了typescript相关配置
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}