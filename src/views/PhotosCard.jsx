import { motion, AnimatePresence } from 'framer-motion'
import { useGalleryViewModel } from '../viewmodels/useGalleryViewModel'

export function PhotosCard({ photoCategories }) {
  const { categories, activeCategory, activeCategoryId, setActiveCategoryId, totalPhotos } =
    useGalleryViewModel(photoCategories)

  return (
    <article id="fotos" className="card card--full" style={{ scrollMarginTop: '2rem' }}>
      <header className="card__header">
        <span className="card__badge">03</span>
        <div>
          <h3 className="card__title">
            <span>Nuestros momentos</span> <span aria-hidden="true">📷</span>
          </h3>
          <p className="card__subtitle">{totalPhotos} fotos que guardo en mi corazón</p>
        </div>
      </header>

      <div className="gallery-tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            className="gallery-tab"
            data-active={activeCategoryId === cat.id}
            aria-selected={activeCategoryId === cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
          >
            <span aria-hidden="true">{cat.icon}</span> {cat.label}
            <span className="gallery-tab__count">{cat.photos.length}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          className="photos-grid photos-grid--full"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {activeCategory.photos.map((p) => (
            <div className="photos-grid__item" key={p.id}>
              {p.src ? (
                <img src={p.src} alt={p.caption} />
              ) : (
                <span aria-hidden="true">🤍</span>
              )}
              <span className="photos-grid__caption">{p.caption}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </article>
  )
}
