import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <div className='bg-Yellow'>
        <Wrapper>
          <Section type="hero">
            <Card
              title="Padrão de usabilidade na experiência digital"
              size='b'>
              <p>Otimize o desempenho e a satisfação do usuário com designs que facilitam a navegação e o engajamento.</p>
              <Button>Ver projetos de Sites</Button>
            </Card>
            <Card color="Orange"></Card>
            <Card color="Orange"></Card>
          </Section>
          <Section title="Projetos" type="row">
            <Card color="Purple" />
            <Card color="Green" />
            <Card color="Purple" />
            <Card color="Green" />
          </Section>
          <Section type="dual" title="Sobre mim">
            <Card color="Purple" size='b' />
            <Card color="Orange"></Card>
            <Card color="Orange"></Card>
            <Card color="Green" title='Habilidades'>
              <Section type='row'>
                <Card>
                </Card>
                <Card>
                </Card>
                <Card>
                </Card>
                <Card>
                </Card>
              </Section>

            </Card>
          </Section>
          <Section title='Contato'>
            <Card title="Vamos trabalhar juntos?">
            <p>Entre em contato para fazermos um orçamento.</p>
            <div> <form action="https://fabform.io/f/xxxxx" method="post" class="ml-auo space-y-4">
                    <input type='text' name ="name" placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email' 
                           name='email'
                           placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='text' placeholder='Subject'
name='subject'                         class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder='Message' rows="6"
                              name='message'
                        class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <Button>Entre em contato</Button>
                </form></div>
            </Card>
          </Section>
        </Wrapper>
      </div>

    </>
  )
}

export default App;
