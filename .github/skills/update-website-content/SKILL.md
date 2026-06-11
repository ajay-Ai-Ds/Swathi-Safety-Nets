---
name: update-website-content
description: 'Add new services, update pricing, testimonials, or contact information on Swathi Safety Nets website. Use when making content changes, adding service types, or updating business details. For: service additions, pricing updates, testimonial management, contact info changes, SEO improvements.'
argument-hint: 'What content needs updating? (e.g., "add new monkey safety net service", "update pricing", "add testimonial")'
user-invocable: true
---

# Update Website Content

Update and maintain Swathi Safety Nets website content efficiently.

## When to Use

- Add a new service type (e.g., monkey nets, cricket nets, construction nets)
- Update pricing or rates
- Add customer testimonials or case studies
- Update contact information or business hours
- Modify service descriptions
- Add new images or update media references
- Deploy changes to production

## Website Structure Overview

The site consists of:
- **index.html**: Main page with all services, testimonials, FAQs, and contact info
- **styles.css**: All styling and layout
- **script.js**: Interactive features and animations
- **images/**: Image assets referenced in HTML

## Procedure

### 1. Identify the Content Section

Locate where the content should go:
- **Services**: Look for service cards/sections (search for "service" in HTML)
- **Pricing**: Find pricing table or rate information
- **Testimonials**: Search for testimonial/review section
- **Contact**: Update phone number, email, or business details
- **Images**: Add/update files in `images/` folder

### 2. Find the Exact Location in index.html

- Open `index.html`
- Use Ctrl+F to search for relevant keywords:
  - Services: "service", "safety net types"
  - Testimonials: "testimonial", "review", "client"
  - Pricing: "price", "cost", "rate"
  - Contact: phone number "+91", email, address

### 3. Make the Update

For **HTML content** (services, testimonials, text):
- Find the section
- Replicate the existing structure/template
- Add new content in the same format
- Ensure proper HTML closing tags

For **Images**:
- Add image file to `images/` folder
- Reference it in HTML: `<img src="images/filename.ext" alt="description">`

For **Styling changes**:
- Edit `styles.css` to update appearance
- Add CSS classes if creating new content types

For **Interactive features**:
- Edit `script.js` if needed for new functionality

### 4. Test Your Changes

- View the updated HTML to verify it renders correctly
- Check that all links work
- Verify new images display properly
- Test on mobile view (if applicable)

### 5. Commit & Deploy

```bash
git add .
git commit -m "Update: [describe what changed]"
git push origin main
```

Vercel auto-deploys from `vercel.json` configuration.

## Common Tasks

### Add a New Service

1. Find existing service card in HTML
2. Copy the entire service card template
3. Modify the text, icon, and details
4. Add it after existing services
5. Ensure class names match for consistent styling

### Update Pricing

1. Search for pricing table or rates section
2. Modify the price values
3. Update any associated descriptions
4. Commit and deploy

### Add Testimonial

1. Find testimonials section
2. Copy an existing testimonial card
3. Replace with new customer name, image (if using), and quote
4. Adjust star rating if applicable
5. Add date if needed

### Add New Image

1. Save optimized image to `images/` folder
2. Reference in HTML with proper alt text: `<img src="images/new-image.jpg" alt="Description">`
3. Ensure image is properly sized for responsive display

## Tips & Best Practices

- **Keep structure consistent**: Match existing formatting for services, testimonials, pricing
- **SEO-friendly**: Use descriptive alt text for images
- **Responsive design**: Test changes on mobile devices
- **Backup**: Commit changes frequently with clear commit messages
- **Images**: Use optimized file sizes for faster loading
- **Contact info**: Update consistently across page (appears multiple times)
- **Internal links**: Use relative paths like `#services` for on-page navigation

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes don't appear on live site | Wait 1-2 minutes for Vercel deployment, then hard refresh browser (Ctrl+Shift+R) |
| Page styling breaks | Check for missing closing tags, verify CSS class names match |
| Images not showing | Verify image path is correct and image file exists in `images/` folder |
| Testimonial formatting wrong | Ensure you copied the complete HTML template, check quotation marks |

## File References

- [index.html](../../index.html) - Main content
- [styles.css](../../styles.css) - Styling
- [script.js](../../script.js) - Interactivity
- [images/](../../images/) - Image assets
- [vercel.json](../../vercel.json) - Deployment config
