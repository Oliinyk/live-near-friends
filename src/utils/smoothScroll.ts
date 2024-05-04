export default function smoothScroll(): void {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
            anchor.addEventListener('click', (e: Event) => {
                e.preventDefault();

                const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
                if (targetId) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        window.scrollTo({
                            top: target.getBoundingClientRect().top + window.pageYOffset,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    });
}