import Header from '../Header/Header';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className='w-full h-full bg-[#FAFAFA]'>
      <Header />
      <div className='grid w-full max-w-screen-lg grid-cols-3 gap-6  mt-8 mx-auto'>
        <div className='flex flex-col w-full col-span-2 space-y-5 border-t-2 border-pink-500'>
          <section className='bg-white overflow-x-scroll space-x-4 flex p-4 border border-black/10 rounded-lg'>
            {
              new Array(10).fill(0).map((_, i) => (
                <div
                  key={i}
                  className='rounded-full w-14 ring-[2px] ring-pink-500 ring-offset-2 h-14 bg-black flex-none '
                />
              ))
            }
          </section>
          <section className='flex flex-col gap-y-4'>
            {
              new Array(5).fill(1).map((_, i) => (
                <Post key={i} postIndex={i} />
              ))
            }
          </section>
        </div>
        {/* sidebar */}
        <div className='fixed right-[15%] max-w-sm'>
          <div className='flex'>
            condensate,matter in the form of a gas of atoms, molecules, or elementary particles that have been so chilled that their motion is virtually halted and as a consequence they lose their separate identities and merge into a single entity. A Bose-Einstein condensate, the fifth state of matter, is formed at low temperatures when a significant number of the elementary particles classified as bosons (see Bose-Einstein statistics) collapse into the same quantum state. A similar condensate that consists of fermions (see Fermi-Dirac statistics) instead of bosons is known as a fermionic condensate,
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
