import { useState } from 'react'
import { Sidebar, NAV_ITEMS } from './views/Sidebar'
import { Hero } from './views/Hero'
import { ChatCard } from './views/ChatCard'
import { FirstDateCard } from './views/FirstDateCard'
import { PhotosCard } from './views/PhotosCard'
import { DistanceCard } from './views/DistanceCard'
import { MusicCard } from './views/MusicCard'
import { LettersCard } from './views/LettersCard'
import { VideoCard } from './views/VideoCard'
import { FinalCard } from './views/FinalCard'
import { BackgroundMusic } from './views/BackgroundMusic'
import { Login } from './views/Login'

import { useSidebarViewModel } from './viewmodels/useSidebarViewModel'

import { coupleData } from './data/coupleData'
import { chatMessages } from './data/chatMessages'
import { firstDateData } from './data/firstDate'
import { photoCategories } from './data/photos'
import { locationsData } from './data/locations'
import { songData } from './data/song'
import { lettersData } from './data/letters'
import { videoMessageData } from './data/videoMessage'

import './styles/App.css'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { activeId, scrollTo } = useSidebarViewModel(NAV_ITEMS)

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="layout">
      <Sidebar activeId={activeId} onNavigate={scrollTo} />
      <BackgroundMusic song={songData} />

      <div className="content-area">
        <Hero coupleData={coupleData} onStart={() => scrollTo('primera-conversacion')} />

        <div className="grid">
          <ChatCard messages={chatMessages} />
          <FirstDateCard data={firstDateData} />
          <PhotosCard photoCategories={photoCategories} />

          <DistanceCard locationsData={locationsData} />
          <MusicCard song={songData} />

          <LettersCard lettersData={lettersData} />
          <VideoCard data={videoMessageData} />

          <FinalCard
            nameA={coupleData.nameA}
            returnDate={coupleData.returnDate}
            onRestart={() => scrollTo('inicio')}
          />
        </div>
      </div>
    </div>
  )
}
