-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'

    use {
        'nvim-telescope/telescope.nvim', tag = '0.1.1',
        -- or                            , branch = '0.1.x',
        requires = { {'nvim-lua/plenary.nvim'} }
    }

    use('rebelot/kanagawa.nvim')
    use('morhetz/gruvbox')

    use('nvim-treesitter/nvim-treesitter', {run = ':TSUpdate'})
    use('nvim-treesitter/playground')
    use('mbbill/undotree')
    use('tpope/vim-fugitive')
    use('theprimeagen/vim-be-good')
    use('nvim-tree/nvim-web-devicons')
    use('mfussenegger/nvim-jdtls')
    use('matbme/JABS.nvim')
    use('freddiehaddad/feline.nvim')
    use('folke/trouble.nvim')
    use('windwp/nvim-ts-autotag')
    use('lukas-reineke/indent-blankline.nvim')
    use('ap/vim-css-color')

    use {
        'VonHeikemen/lsp-zero.nvim',
        branch = 'v2.x',
        requires = {
            -- LSP Support
            {'neovim/nvim-lspconfig'},             -- Required
            {                                      -- Optional
            'williamboman/mason.nvim',
            run = function()
                pcall(vim.cmd, 'MasonUpdate')
            end
        },
        {'williamboman/mason-lspconfig.nvim'}, -- Optional

        -- Autocompletion
        {'hrsh7th/nvim-cmp'},     -- Required
        {'hrsh7th/cmp-nvim-lsp'}, -- Required
        {'L3MON4D3/LuaSnip'},     -- Required
    }
}

use {
    's1n7ax/nvim-terminal',
    config = function()
        vim.o.hidden = true
        require('nvim-terminal').setup()
    end
}

use {
    'ZhiyuanLck/smart-pairs',
    event = 'InsertEnter',
    config = function()
        require('pairs'):setup()
    end
}

use {
    'numtostr/comment.nvim',
    config = function()
        require("Comment").setup()
    end
}

use {
    'vuki656/package-info.nvim',
    requires ='muniftanjim/nui.nvim'
}

-- using packer.nvim
use {
    'akinsho/bufferline.nvim',
    tag = "*",
    requires = 'nvim-tree/nvim-web-devicons'}

end)

