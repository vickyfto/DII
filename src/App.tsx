import './App.css'
import { DynamicButton } from './components/custom/dynamic-button'
import { ArrowRight } from 'lucide-react'

function App() {
  //   1. Dinamis background dengan setidaknya 3 warna. (done)
  // 2. Dapat memiliki ikon atau tidak. (done)
  // 3. Posisi ikon dapat diatur di sebelah kanan atau kiri label. (done)
  // 4. Ukuran, background, dan jenis ikon dapat diatur sebagai parameter saat memanggil komponen tersebut. (done)
  // 5. Button harus memiliki setidaknya 3 ukuran. (done)
  // 6. Button dapat memiliki tooltip atau tidak. (done)
  // 7. Posisi tooltip dapat diatur di atas, bawah, kanan, dan kiri. (done)
  // 8. Menggunakan Typescript. (done)

  return (
    <>
      {/*  noted : the naming colors is not suitable for jump to development mode */}
      <div className='flex flex-col gap-10'>

        <div className='min-w-40'>
          <div className='text-2xl text-left mb-5'>With icon and use all direction tooltip</div>
          <div className="grid grid-cols-5 gap-4">
            <DynamicButton
              label="tp top"
              color="tealToLime"
              icon={ArrowRight}
              iconPosition='left'
              tooltip="top"
              tooltipPosition="top"
            />

            <DynamicButton
              label="tp right"
              color="cyanToBlue"
              icon={ArrowRight}
              iconPosition='right'
              tooltip='right'
              tooltipPosition="right"
            />

            <DynamicButton
              label="tp bottom"
              color="purpleToPink"
              tooltip="bottom"
              tooltipPosition="bottom"
            />

            <DynamicButton
              label="tp left"
              color="pinkToOrange"
              tooltip="left"
              tooltipPosition="left"
            />
          </div>
        </div>

        <div className='min-w-40'>
          <div className='text-2xl text-left mb-5'>use all size without tooltip</div>
          <div className="grid grid-cols-5 gap-4">
            <DynamicButton
              label="default"
              color="tealToLime"
              size="default"
            />

            <DynamicButton
              label="xs"
              size="xs"
              color="cyanToBlue"
            />

            <DynamicButton
              label="sm"
              size="sm"
              color="purpleToPink"
            />

            <DynamicButton
              label="lg"
              size="lg"
              color="pinkToOrange"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
