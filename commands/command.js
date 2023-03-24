const commandBuilder = require(`../slashCommands/commandBuilder`);
const register = require('../functions/register');
const update = require('../functions/update');
const remove = require('../functions/remove');
module.exports = {
  data: commandBuilder,
  async execute(interaction) {
    // 등록
    if (interaction.options.getSubcommand() === '등록') {
      await register(interaction);
    }
    // 수정
    else if (interaction.options.getSubcommand() === '수정') {
      await update(interaction);
    }
    // 삭제
    else if (interaction.options.getSubcommand() === '삭제') {
      await remove(interaction);
    }
    /*
    // 직원
    else if (interaction.options.getSubcommand() === '직원') {
      await showMember(interaction);
    }
    // 사업체
    else if (interaction.options.getSubcommand() === '사업체') {
      await showMember(interaction);
    }
    // 직원조회
    else if (interaction.options.getSubcommand() === '직원조회') {
      await showMember(interaction);
    }
    // 분배
    else if (interaction.options.getSubcommand() === '분배') {
      await showMember(interaction);
    }
    */
  },
};
