import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ФотоСтудия НСК</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'portfolio', 'about', 'services', 'pricing', 'comparison', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О фотографах'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'comparison' && 'Сравнение'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Запечатлеваем моменты <span className="text-primary">по-разному</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Классическая фотосъемка от Марии и нейрофотография от Александры в Новосибирске
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => scrollToSection('services')} size="lg" className="bg-primary hover:bg-primary/90">
              Наши услуги
            </Button>
            <Button onClick={() => scrollToSection('comparison')} variant="outline" size="lg">
              Что выбрать?
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4bb07c42-fb25-4bf0-9676-14f056cbff7b/files/76e836f7-5ee7-455e-b5cf-39fb21fa92d2.jpg"
                alt="Классическая фотография"
                className="w-full h-80 object-cover"
              />
              <CardHeader>
                <CardTitle>Классическая фотография</CardTitle>
                <CardDescription>Работы Марии</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4bb07c42-fb25-4bf0-9676-14f056cbff7b/files/02a58753-2401-4cb3-9cea-e092154db96c.jpg"
                alt="Нейрофотография"
                className="w-full h-80 object-cover"
              />
              <CardHeader>
                <CardTitle>Нейрофотография</CardTitle>
                <CardDescription>Работы Александры</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">О фотографах</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/42e30177-01a2-4ca1-ab9c-22f93286e334.jpg"
                  alt="Мария - классический фотограф"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Мария</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="Camera" size={18} className="text-primary" />
                  Классический фотограф
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Профессиональный фотограф с 8-летним опытом работы. Специализируется на портретной, 
                  семейной и свадебной съемке. Создаю живые, естественные кадры, которые передают 
                  настоящие эмоции и атмосферу момента.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/fe75699e-c452-4a3d-afb5-7477e525d402.JPG"
                  alt="Александра - нейрофотограф"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Александра</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="Sparkles" size={18} className="text-primary" />
                  Нейрофотограф
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Специалист по созданию уникальных изображений с помощью искусственного интеллекта. 
                  Создаю фантастические, стилизованные и концептуальные портреты, которые выходят 
                  за рамки реальности и воплощают самые смелые идеи.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="User" size={40} className="text-primary mb-2" />
                <CardTitle>Портретная съемка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Индивидуальные и семейные портреты</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Heart" size={40} className="text-primary mb-2" />
                <CardTitle>Свадебная съемка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Полное сопровождение вашего праздника</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wand2" size={40} className="text-primary mb-2" />
                <CardTitle>AI-портреты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Уникальные стилизованные изображения</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Palette" size={40} className="text-primary mb-2" />
                <CardTitle>Концепт-съемка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Креативные фотосессии под ключ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Классическая фотосъемка</CardTitle>
                <CardDescription>Мария</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Портретная съемка (1 час)</span>
                  <span className="font-bold">3 500 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Семейная съемка (2 часа)</span>
                  <span className="font-bold">6 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Свадебная съемка (полный день)</span>
                  <span className="font-bold">25 000 ₽</span>
                </div>
                <Badge variant="outline" className="mt-4">+ обработка 30-50 фото</Badge>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Нейрофотография</CardTitle>
                <CardDescription>Александра</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>AI-портрет (5 вариантов)</span>
                  <span className="font-bold">2 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Премиум пакет (15 вариантов)</span>
                  <span className="font-bold">4 500 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Концепт-проект (30 изображений)</span>
                  <span className="font-bold">8 000 ₽</span>
                </div>
                <Badge variant="outline" className="mt-4">Срок: 2-3 дня</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Какую фотосъемку выбрать?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Оба подхода имеют свои преимущества. Выбор зависит от ваших целей и предпочтений
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Camera" className="text-primary" />
                  Классическая фотография
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <Icon name="Plus" size={20} />
                    Плюсы
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Реальные, живые эмоции и моменты</li>
                    <li>✓ Документальная ценность снимков</li>
                    <li>✓ Профессиональная работа со светом</li>
                    <li>✓ Возможность запечатлеть всю семью</li>
                    <li>✓ Атмосферные кадры из жизни</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                    <Icon name="Minus" size={20} />
                    Особенности
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Требует личного присутствия</li>
                    <li>• Зависит от погоды (для уличной съемки)</li>
                    <li>• Ограничен реальными локациями</li>
                    <li>• Больше времени на подготовку</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium mb-2">Подходит для:</p>
                  <p className="text-sm text-muted-foreground">
                    Тех, кто ценит реализм, хочет запечатлеть настоящие эмоции, готовится к важному 
                    событию (свадьба, семейная съемка) или предпочитает классические портреты
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" />
                  Нейрофотография
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <Icon name="Plus" size={20} />
                    Плюсы
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Безграничные творческие возможности</li>
                    <li>✓ Любые стили и эпохи</li>
                    <li>✓ Не требует личного присутствия</li>
                    <li>✓ Доступная цена</li>
                    <li>✓ Уникальные концептуальные образы</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                    <Icon name="Minus" size={20} />
                    Особенности
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Стилизованный, не документальный результат</li>
                    <li>• Требуются исходные фотографии</li>
                    <li>• Срок изготовления 2-3 дня</li>
                    <li>• Ограниченный контроль деталей</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium mb-2">Подходит для:</p>
                  <p className="text-sm text-muted-foreground">
                    Тех, кто хочет креативные, необычные изображения для соцсетей, ищет уникальный 
                    подарок, мечтает примерить образы из разных эпох или просто любит эксперименты
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Елена К.</CardTitle>
                <CardDescription>Семейная фотосессия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Мария — настоящий профессионал! Сделала потрясающие семейные фото. 
                  Дети чувствовали себя комфортно, а результат превзошел ожидания.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Дмитрий П.</CardTitle>
                <CardDescription>AI-портреты</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Александра создала невероятные AI-портреты! Я в образе викинга и рыцаря — 
                  друзья в восторге. Отличная идея для подарка!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Анна М.</CardTitle>
                <CardDescription>Свадебная съемка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Наша свадьба получилась волшебной благодаря Марии! Каждый кадр — произведение искусства. 
                  Спасибо за память на всю жизнь!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Мария</CardTitle>
                <CardDescription>Классический фотограф</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span>+7 (923) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span>maria.photo@mail.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Instagram" className="text-primary" />
                  <span>@maria_photo_nsk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span>Новосибирск</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Александра</CardTitle>
                <CardDescription>Нейрофотограф</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span>+7 (913) 987-65-43</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span>alex.ai.photo@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Instagram" className="text-primary" />
                  <span>@alex_ai_art</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span>Новосибирск</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" className="mr-2" />
              Записаться на съемку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 ФотоСтудия НСК. Мария и Александра — Новосибирск</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;