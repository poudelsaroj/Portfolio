#!/bin/bash

echo "🚀 Setting up AI Portfolio Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Setting up environment..."
if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    cat > .env.local << EOL
# EmailJS Configuration (Replace with your actual values)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Tawk.to Configuration (Replace with your actual ID)
NEXT_PUBLIC_TAWK_TO_ID=your_tawk_to_id
EOL
    echo "✅ Created .env.local file. Please update it with your actual API keys."
else
    echo "✅ .env.local already exists."
fi

echo "🎨 Configuring project..."

# Make sure all directories exist
mkdir -p src/components/{Background,Chat,Contact,Hero,Layout,Projects,Skills,Stats,Terminal}
mkdir -p src/{types,utils,hooks}
mkdir -p public

echo "🔍 Checking project structure..."
if [ -f "src/app/page.tsx" ]; then
    echo "✅ Next.js app structure is correct"
else
    echo "❌ Missing core files. Please check the project structure."
fi

echo "🚀 Project setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your EmailJS and Tawk.to credentials"
echo "2. Update personal information in src/components/Contact/Contact.tsx"
echo "3. Replace placeholder content with your own information"
echo "4. Run 'npm run dev' to start the development server"
echo "5. Run 'npm run build' to build for production"
echo ""
echo "📚 For detailed setup instructions, see README.md"
