const { I } = inject();
 
module.exports = {
    // setting locators
  navigateToTheNextArticle(href) {
    const nextArticle = `a[href="${href}"]`;
    I.click(nextArticle);
  }

}