const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quack')
    .setDescription('EntengerĂ¤usche'),
  async execute(interaction) {
    await interaction.reply('Quack');
  },
};