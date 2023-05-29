local lsp = require("lsp-zero")

lsp.preset("recommended")

lsp.ensure_installed({
  "tsserver",
  "jdtls",
  "lua_ls"
})

root_dir = function() return vim.fs.dirname(vim.fs.find({ '.gradlew', '.gitignore', 'mvnw', 'build.grade.kts' }, { upward = true })[1]) .. "\\" end

lsp.setup()
