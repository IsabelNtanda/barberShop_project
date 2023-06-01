const navig = Array.from(document.getElementsByClassName('navigation'))
navig.forEach((navigation) => {
  navigation.addEventListener('click', onNavigationClick)
})

function onNavigationClick(event) {
  const selectedNavigation = event.target.getAttribute('data')
  navig.forEach((navigation) => {
    const navigationAttribute = navigation.getAttribute('data')
    if (navigationAttribute == selectedNavigation) {
      navigation.classList.add('active')
    } else {
      navigation.classList.remove('active')
    }
  })
}
