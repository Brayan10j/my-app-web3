import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Shield,
  Globe,
  Coins,
  Zap,
  Wallet,
  BarChart3,
  Layers
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  La forma más fácil y segura de aceptar pagos con criptomonedas
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nuestra solución Web3 con Thirdweb te permite aceptar pagos en criptomonedas de forma segura, rápida y
                  con comisiones mínimas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Comienza ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
               
                <Button variant="outline" size="lg">
                  Conoce más
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Plataforma de pagos con criptomonedas"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beneficios de nuestra solución de pagos Web3
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre por qué las empresas están cambiando a nuestra plataforma de pagos con criptomonedas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <Coins className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Comisiones reducidas</h3>
              <p className="text-muted-foreground text-center">
                Ahorra hasta un 70% en comisiones comparado con métodos de pago tradicionales.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <Shield className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Máxima seguridad</h3>
              <p className="text-muted-foreground text-center">
                Transacciones protegidas por la tecnología blockchain y los protocolos de Thirdweb.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <Globe className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Alcance global</h3>
              <p className="text-muted-foreground text-center">
                Acepta pagos de cualquier parte del mundo sin restricciones ni intermediarios.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Integración rápida</h3>
              <p className="text-muted-foreground text-center">
                Implementa nuestra solución en minutos, sin conocimientos técnicos avanzados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Características principales
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestra plataforma está diseñada para ofrecerte la mejor experiencia en pagos con criptomonedas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Soporte multi-cripto</h3>
              <p className="text-muted-foreground text-center">
                Acepta Bitcoin, Ethereum, Solana y más de 50 criptomonedas diferentes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Integración Thirdweb</h3>
              <p className="text-muted-foreground text-center">
                Aprovecha la potencia y seguridad de la infraestructura de Thirdweb.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Panel intuitivo</h3>
              <p className="text-muted-foreground text-center">
                Visualiza todas tus transacciones y analíticas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Cómo Funciona?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Implementar nuestra solución de pagos con Thirdweb es sencillo y rápido
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:gap-12">
            <div className="relative flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  01
                </div>
                <h3 className="text-xl font-bold">Regístrate en nuestra plataforma</h3>
              </div>
              <p className="text-muted-foreground pl-16">
                Crea tu cuenta en minutos y configura tu perfil de comerciante.
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  02
                </div>
                <h3 className="text-xl font-bold">Integra nuestro sistema de pagos</h3>
              </div>
              <p className="text-muted-foreground pl-16">
                Añade nuestro botón de pago a tu sitio web o utiliza nuestra API con Thirdweb.
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  03
                </div>
                <h3 className="text-xl font-bold">Personaliza tus opciones</h3>
              </div>
              <p className="text-muted-foreground pl-16">
                Selecciona las criptomonedas que deseas aceptar y configura tus preferencias.
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  04
                </div>
                <h3 className="text-xl font-bold">Comienza a recibir pagos</h3>
              </div>
              <p className="text-muted-foreground pl-16">
                Tus clientes podrán pagar con criptomonedas de forma inmediata y segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comienza a aceptar criptomonedas hoy mismo
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a miles de empresas que ya están aprovechando las ventajas de los pagos con criptomonedas
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
                <Input className="bg-primary-foreground text-foreground" placeholder="Ingresa tu email" type="email" />
                <Button variant="secondary" className="px-8">
                  Empezar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs">Te contactaremos para configurar tu cuenta. Sin compromisos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 lg:py-20 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">CryptoPay</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                La solución más avanzada para aceptar pagos con criptomonedas, impulsada por la tecnología de Thirdweb.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Soporte
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Términos legales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2025 CryptoPay. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Política de privacidad
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Términos de servicio
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
