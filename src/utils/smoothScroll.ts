export default function smoothScroll(): void {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
            anchor.addEventListener('click', (e: Event) => {
                e.preventDefault();

                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const screenWidth = window.innerWidth;

                const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
                if (targetId) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        if (screenWidth > 767) {
                            if (scrollTop < 1) {
                                window.scrollTo({
                                    top: target.getBoundingClientRect().top + window.pageYOffset - 380,
                                    behavior: 'smooth'
                                });
                            } else {
                                window.scrollTo({
                                    top: target.getBoundingClientRect().top + window.pageYOffset,
                                    behavior: 'smooth'
                                });
                            }
                        } else {
                            window.scrollTo({
                                top: target.getBoundingClientRect().top + window.pageYOffset,
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            });
        });
    });
}