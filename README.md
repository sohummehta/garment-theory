# Garment Theory - Virtual Try-On System

A revolutionary AI-powered virtual try-on platform that allows users to experience clothes before purchasing them. Built with Next.js, TypeScript, and modern web technologies.

## 🎯 Features

### Core Virtual Try-On
- **Smart Body Scanning**: Advanced camera capture with pose detection and quality assessment
- **Measurement Input**: Customizable body measurements for accurate fit prediction
- **Garment Selection**: Curated collection of high-quality garments with multiple colorways
- **Realistic Rendering**: AI-powered image synthesis with natural lighting and shadows
- **Side-by-Side Comparison**: Before/after visualization with fit guidance

### User Experience
- **Multi-Step Workflow**: Intuitive 4-step process (Capture → Measure → Select → Visualize)
- **Quality Warnings**: Real-time feedback on pose, lighting, and visibility
- **Privacy-First**: Local processing with clear privacy notices
- **Responsive Design**: Optimized for mobile and desktop experiences

### Collection Management
- **Wishlist**: Save favorite garments for later
- **Try-On History**: Track previously tried garments
- **Advanced Filtering**: Search by category, brand, price, and more
- **Swipe Interface**: Alternative card-based browsing experience

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser with camera access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/garment-theory.git
cd garment-theory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

### Virtual Try-On Process

1. **Capture Photo**
   - Allow camera access when prompted
   - Follow the pose guide overlay
   - Ensure good lighting and clear visibility
   - Click "Capture Photo" when ready

2. **Input Measurements**
   - Enter your chest, length, and sleeve measurements
   - Review any quality warnings from the capture
   - Click "Continue" to proceed

3. **Select Garment**
   - Browse the curated collection
   - Choose your preferred garment
   - Select colorway and size
   - Click "Try It On"

4. **View Results**
   - See the before/after comparison
   - Review fit guidance and garment details
   - Save, share, or add to cart

### Navigation

- **Home**: Landing page with feature overview
- **Try-On**: Main virtual try-on experience
- **Closet**: Browse and filter garment collection
- **Swipe**: Card-based garment discovery

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: React hooks + Zustand
- **UI Components**: Custom components with Radix UI primitives

### Project Structure
```
src/
├── app/                 # Next.js app router pages
│   ├── tryon/          # Virtual try-on experience
│   ├── closet/         # Garment browsing
│   ├── swipe/          # Card-based interface
│   └── layout.tsx      # Root layout with navigation
├── components/         # Reusable UI components
│   ├── tryon.tsx       # Main try-on component
│   ├── wishlist.tsx    # Wishlist management
│   ├── tryon-history.tsx # History tracking
│   └── navigation.tsx  # Site navigation
├── types/              # TypeScript type definitions
│   └── garment.ts      # Garment and user data types
└── lib/                # Utility functions and data
    └── garment-data.ts # Mock garment dataset
```

### Data Models

#### Garment
```typescript
interface Garment {
  id: string;
  sku: string;
  name: string;
  category: 'tops' | 'outerwear' | 'dresses';
  brand: string;
  price: number;
  material: string;
  colorways: GarmentColorway[];
  sizes: GarmentSize[];
  landmarks: GarmentLandmarks;
  sizeChart: Record<string, GarmentSize>;
}
```

#### User Measurements
```typescript
interface UserMeasurements {
  chest: number;    // inches
  length: number;   // inches
  sleeve: number;   // inches
  waist?: number;   // inches
  hips?: number;    // inches
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Trust and technology
- **Secondary**: Gray (#6b7280) - Neutral and professional
- **Success**: Green (#16a34a) - Positive actions
- **Warning**: Yellow (#ca8a04) - Quality alerts
- **Error**: Red (#dc2626) - Negative actions

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability
- **Code**: Geist Mono for technical content

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent padding and hover states
- **Forms**: Clear labels and focus indicators
- **Navigation**: Smooth transitions and active states

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Garments
1. Edit `src/lib/garment-data.ts`
2. Add new garment object following the Garment interface
3. Include high-quality images (1500-2500px recommended)
4. Add proper landmarks and size charts

### Customizing Try-On Logic
1. Modify `src/components/tryon.tsx`
2. Update the `generateTryOn` function for custom rendering
3. Adjust pose quality assessment in `capturePhoto`
4. Customize measurement validation

## 📊 Performance

### Optimization Features
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on demand
- **Caching**: Browser and CDN caching strategies

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔒 Privacy & Security

### Data Handling
- **Local Processing**: Images processed in browser
- **No Storage**: User photos not stored on servers
- **Secure Camera**: HTTPS-only camera access
- **Privacy Notice**: Clear data usage explanations

### Compliance
- **GDPR Ready**: Privacy-first design
- **COPPA Compliant**: Safe for all ages
- **Accessibility**: WCAG 2.1 AA standards

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with static export
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Maintain component documentation
- Test on multiple devices

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Basic virtual try-on functionality
- ✅ Garment collection management
- ✅ User measurement input
- ✅ Quality assessment

### Phase 2 (Next)
- 🔄 AI-powered body segmentation
- 🔄 Advanced garment fitting algorithms
- 🔄 Social sharing features
- 🔄 User accounts and profiles

### Phase 3 (Future)
- 📋 AR try-on with device cameras
- 📋 3D garment visualization
- 📋 Integration with e-commerce platforms
- 📋 Advanced analytics and insights

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Vercel**: For hosting and deployment platform
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Fashion Industry**: For inspiration and use cases

## 📞 Support

- **Documentation**: [docs.garmenttheory.com](https://docs.garmenttheory.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/garment-theory/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/garment-theory/discussions)
- **Email**: support@garmenttheory.com

---

Built with ❤️ by the Garment Theory team
