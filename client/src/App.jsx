import { useState } from 'react';
import { Badge } from './components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

const App = () => {

  const [ activeTab, setActiveTab ] = useState('dashboard');

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <h1 className='text-2xl font-bold text-gray-900'>DOULOS SALUD</h1>
                <p className='text-sm text-gray-500'>Sistema de Gestión Odontológica</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Badge variant='outline' className="text-green-600 border-green-600">
                Sistema Activo
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <Tabs value={ activeTab } onValueChange={ setActiveTab } className='space-y-6'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
            <TabsTrigger value='inventory'>Inventario</TabsTrigger>
            <TabsTrigger value='professional'>Profesional</TabsTrigger>
            <TabsTrigger value='patient'>Pacientes</TabsTrigger>
          </TabsList>
        </Tabs>
      </main>
    </div>
  )
}

export default App;