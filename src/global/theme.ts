const baseSpacingDimen = 8

export default {
  colors: {
    primary: '#5636d3',
    secondary: '#ff872c',
    secondary_light: 'rgba(255, 135,44, 0.3)',
    success: '#12A454',
    success_light: 'rgba(18, 164, 84, 0.5)',
    attention: '#E83F5B',
    attention_light: 'rgba(232, 63, 91, 0.5)',
    shape: '#fff',
    title: '#363f5f',
    text: '#969cb2',
    text_dark: '#000000',
    background: '#f0f2f5',
  },
  spacingSizes: {
    extraSmallSpacing: baseSpacingDimen / 2, // 4
    smallSpacing: baseSpacingDimen, // 8
    mediumSmallSpacing: (baseSpacingDimen * 3) / 2, //12
    mediumSpacing: baseSpacingDimen * 2, // 16
    mediumLargeSpacing: baseSpacingDimen * 3, // 24
    largeSpacing: baseSpacingDimen * 4, // 32
    veryLargeSpacing: baseSpacingDimen * 6, //48
    extraLargeSpacing: baseSpacingDimen * 8, // 64
    superLargeSpacing: baseSpacingDimen * 11, // 88
    megaLargeSpacing: baseSpacingDimen * 12, // 96
  },
  fonts: {
    regular: 'Nunito_400Regular',
    medium: 'Nunito_500Medium',
    bold: 'Nunito_700Bold',
    semiBold: 'Poppins_600SemiBold'
  },
};
