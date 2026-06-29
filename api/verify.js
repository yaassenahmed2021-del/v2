export default async function handler(req, res) {
    // إعدادات CORS للسماح بالاتصال من أي مكان
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { key } = req.body;
        
        // قائمة المفاتيح المسموح بها
        const validKeys = ["PRO-12346", "yaso0981435"];

        if (validKeys.includes(key)) {
            // رد النجاح
            return res.status(200).json({ success: true, message: "تم التفعيل" });
        } else {
            // رد الخطأ
            return res.status(401).json({ success: false, message: "مفتاح غير صالح" });
        }
    }

    return res.status(404).json({ message: 'Not Found' });
}
