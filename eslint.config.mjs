// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    // Добавляем свои правила
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: {
                    max: 1, // Убираем unsupported свойство allowFirstLine
                },
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/no-multiple-template-root': 'off',
    },

    // Условное применение правил для файлов .vue
    files: ['**/*.vue'],
});