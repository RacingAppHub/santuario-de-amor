'use client';

import Link from 'next/link';

// El Header y Footer globales son gestionados por layout.tsx

export default function AcercaDe() {
    return (
        <div className="min-h-screen text-gray-200 pt-20"> {/* Padding superior para el Header global */}
            {/* Se ha eliminado el padding superior (py-12 -> pb-12) */}
            <main className="container mx-auto px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-pink-300 mb-6 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">Acerca de Santuario de Amor</h2>
                    <p className="text-lg text-gray-300 mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
                        Santuario de Amor es un espacio sagrado dedicado a la guía espiritual, la sanación emocional y la manifestación de tus deseos más profundos. Creemos que el amor es la fuerza más poderosa del universo, y nuestra misión es ayudarte a alinear tu energía con esa fuerza para atraer la paz, la felicidad y las relaciones que mereces.
                    </p>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-pink-400 mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Nuestra Misión</h3>
                            <p className="text-gray-400">
                                Nuestra misión es proporcionar un faro de luz para aquellos que se sienten perdidos en la oscuridad de los desafíos emocionales y amorosos. A través de rituales personalizados, limpiezas energéticas y una guía compasiva, te empoderamos para que tomes el control de tu destino romántico y encuentres la plenitud.
                            </p>
                        </div>

                        <div id="terminos">
                            <h3 className="text-2xl font-bold text-pink-400 mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Términos y Condiciones</h3>
                            <p className="text-gray-400">
                                Los servicios ofrecidos en Santuario de Amor son para fines de guía espiritual y entretenimiento. Los resultados de los trabajos espirituales pueden variar de persona a persona y no se garantizan resultados específicos. Al solicitar nuestros servicios, confirmas que eres mayor de 18 años y que entiendes la naturaleza de los mismos. Las consultas no reemplazan el consejo médico, legal o financiero profesional.
                            </p>
                        </div>

                        <div id="privacidad">
                            <h3 className="text-2xl font-bold text-pink-400 mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Políticas de Privacidad</h3>
                            <p className="text-gray-400">
                                Tu confianza es primordial para nosotros. Toda la información compartida durante nuestras consultas y rituales es estrictamente confidencial. No compartimos tus datos personales con terceros bajo ninguna circunstancia. La discreción y el respeto por tu privacidad son los pilares de nuestro santuario.
                            </p>
                        </div>

                        <div id="reembolsos">
                            <h3 className="text-2xl font-bold text-pink-400 mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Política de Reembolso</h3>
                            <p className="text-gray-400">
                                Debido a la naturaleza de nuestros servicios como productos digitales y guías espirituales entregados instantáneamente, no ofrecemos reembolsos una vez que se ha realizado una donación y se ha entregado el producto digital correspondiente (como el PDF o el acceso a la página de agradecimiento). Agradecemos tu comprensión y tu apoyo a nuestra misión.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
