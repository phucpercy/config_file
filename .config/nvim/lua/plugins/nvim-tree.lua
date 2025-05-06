return {
  'nvim-tree/nvim-tree.lua',
  config = function()
    vim.keymap.set('n', '<leader>ee', '<cmd>NvimTreeToggle<CR>', { desc = 'Toggele [E]xplorer' })
    require('nvim-tree').setup {
      hijack_netrw = true,
      auto_reload_on_write = true,
    }
  end,
}
