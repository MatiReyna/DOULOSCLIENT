import { Activity } from 'lucide-react';

const Header = () => {
    return (
        <header className='bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-brand-blue-600 rounded-lg flex items-center justify-center'>
                        <Activity className='w-6 h-6 text-white' />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-brand-gray'>Doulos Salud</h1>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;