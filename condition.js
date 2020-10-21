 const condition = [
    {
        "id": "c_926",
        "name": "ACE inhibitor-induced cough",
        "common_name": "ACE inhibitor-induced cough",
        "sex_filter": "both",
        "categories": [
            "Hypertensiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R05, T88.7, Y52.4",
            "hint": "Your symptoms may result from used medication. Please report that symptom to your GP."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_764",
        "name": "Abdominal aortic aneurysm",
        "common_name": "Abdominal aortic aneurysm",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I71.4",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_885",
        "name": "Abdominal aortic dissection",
        "common_name": "Abdominal aortic dissection",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I71.0, I71.3, I71.4, I71.5, I71.6, I71.8",
            "hint": "You may require immediate medical attention, seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_969",
        "name": "Abdominal pain, unspecified",
        "common_name": "Unspecific abdominal pain",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R10.4",
            "hint": "Please consult with your doctor if the pain lasts more than 24 hours."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_547",
        "name": "Abducens nerve palsy",
        "common_name": "Sixth nerve palsy",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H49.2",
            "hint": "Please see an ophthalmologist or a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_306",
        "name": "Acetaminophen poisoning",
        "common_name": "Paracetamol poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T39.1",
            "hint": "You may need immediate medical attention!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1",
        "name": "Achalasia",
        "common_name": "Achalasia",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K22.0",
            "hint": "You need to be evaluated by a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_803",
        "name": "Achilles tendinitis",
        "common_name": "Achilles tendinitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M76.6",
            "hint": "You should consult an orthopedist or a trauma surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_806",
        "name": "Achilles tendon rupture",
        "common_name": "Achilles tendon rupture",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S86.1",
            "hint": "You should visit an orthopedist or a trauma surgeon immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_111",
        "name": "Acne",
        "common_name": "Acne",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "L70.0, L70.1, L70.2, L70.3, L70.5, L70.8, L70.9, L73.0",
            "hint": "Please schedule an appointment with your family doctor or a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_259",
        "name": "Acquired immunodeficiency syndrome (AIDS)",
        "common_name": "AIDS",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B20, B21, B22, B23, B24",
            "hint": "See your family doctor or an infectious disease specialist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_163",
        "name": "Acromegaly",
        "common_name": "Acromegaly",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E22.0",
            "hint": "Please see an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_665",
        "name": "Acute HIV infection",
        "common_name": "Acute HIV infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "B23.0",
            "hint": "You should consult an infectious disease specialist immediately."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_996",
        "name": "Acute angle-closure glaucoma",
        "common_name": "Acute angle-closure glaucoma",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "H40.2",
            "hint": "Please seek an ophthalmologist's help as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_296",
        "name": "Acute anticholinergic syndrome",
        "common_name": "Acute anticholinergic syndrome",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T44.3",
            "hint": "You need to seek medical attention as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_72",
        "name": "Acute bronchitis",
        "common_name": "Acute bronchitis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "J20, J20.9, J68.0",
            "hint": "See your family doctor. You may also need to consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_187",
        "name": "Acute cholinergic syndrome",
        "common_name": "Acute cholinergic syndrome",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T44.0, T44.1",
            "hint": "See a doctor as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_184",
        "name": "Acute cystitis",
        "common_name": "Bladder infection",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "N30",
            "hint": "You should see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1005",
        "name": "Acute heart failure",
        "common_name": "Acute heart failure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": null,
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby to help you."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_191",
        "name": "Acute hypnotic toxicity",
        "common_name": "Acute hypnotic toxicity",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "F13.0",
            "hint": "Please consult a toxicologist and/or psychiatrist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_697",
        "name": "Acute intestinal ischemia",
        "common_name": "Acute intestinal ischemia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K55.0",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby for help or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_662",
        "name": "Acute kidney injury",
        "common_name": "Acute kidney failure",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "N17",
            "hint": "Visit a nephrologist or your family doctor immediately."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_507",
        "name": "Acute liver failure",
        "common_name": "Acute liver failure",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K72.0",
            "hint": "You need immediate medical attention. Call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_705",
        "name": "Acute lower gastrointestinal bleeding",
        "common_name": "Acute lower gastrointestinal bleeding",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K92.2",
            "hint": "Please, consult a gastroenterologist immediately."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1097",
        "name": "Acute lower limb ischemia",
        "common_name": "Acute lower limb ischemia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I74.3",
            "hint": "You may require immediate medical attention, head over to the closest emergency department!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_70",
        "name": "Acute lymphoblastic leukemia",
        "common_name": "Acute lymphoid leukemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C91.0",
            "hint": "For a proper diagnosis you must see a hematologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_526",
        "name": "Acute mastoiditis",
        "common_name": "Acute mastoiditis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "H70.0",
            "hint": "Please consult an ENT specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_71",
        "name": "Acute myeloid leukemia",
        "common_name": "Acute myeloid leukemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C92.0",
            "hint": "For a proper diagnosis you must see a hematologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_193",
        "name": "Acute opioid (morphine, heroin) toxicity",
        "common_name": "Acute opioid (morphine, heroin) toxicity",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T50.7",
            "hint": "You may require immediate medical attention! Ask someone nearby for help and call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_130",
        "name": "Acute otitis media",
        "common_name": "Middle ear infection",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H66.0, H66.4, H66.9",
            "hint": "Please see your family doctor or an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_73",
        "name": "Acute pancreatitis",
        "common_name": "Acute pancreatitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K85",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_168",
        "name": "Acute porphyria",
        "common_name": "Acute porphyria",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E80.2",
            "hint": "Please see your family doctor or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_331",
        "name": "Acute rheumatic fever",
        "common_name": "Acute rheumatic fever",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "I00, I01",
            "hint": "Please see a cardiologist or your family doctor as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_133",
        "name": "Acute rhinosinusitis",
        "common_name": "Acute sinusitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J01",
            "hint": "Please consult with your family doctor in case your symptoms get worse or do not relieve in 5 days."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_194",
        "name": "Acute stimulant (amphetamine, cocaine) overdose",
        "common_name": "Acute stimulant (amphetamine, cocaine) overdose",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T43.6",
            "hint": "You may require immediate medical attention! Ask someone nearby for help and call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_249",
        "name": "Acute streptococcal tonsillopharyngitis",
        "common_name": "Acute streptococcal tonsillopharyngitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J02.0, J03.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1098",
        "name": "Acute stress reaction",
        "common_name": "Acute reaction to stress",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F43.0",
            "hint": "If your symptoms worsen or do not diminish, consider consulting a psychologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_430",
        "name": "Acute thyroiditis",
        "common_name": "Acute thyroiditis",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E06.0",
            "hint": "Please see an endocrinologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_703",
        "name": "Acute upper gastrointestinal bleeding",
        "common_name": "Acute upper gastrointestinal bleeding",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K92.2",
            "hint": "You should consult a gastroenterologist immediately! Ask someone nearby for help or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1099",
        "name": "Acute upper limb ischemia",
        "common_name": "Acute upper limb ischemia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I74.2",
            "hint": "You may require immediate medical attention, head over to the closest emergency department!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_77",
        "name": "Acute urticaria",
        "common_name": "Hives",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "L50",
            "hint": "If the skin changes don't disappear within 24 hours, contact your GP or dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_121",
        "name": "Acute viral tonsillopharyngitis",
        "common_name": "Acute viral tonsillopharyngitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "J02, J02.8, J02.9, J03.8, J03.9",
            "hint": "Please consult with your family doctor in case your symptoms get worse or do not relieve in 1-2 days."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_57",
        "name": "Addison's disease",
        "common_name": "Addison's disease",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E27.1",
            "hint": "You need to contact an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_868",
        "name": "Adenomyosis",
        "common_name": "Adenomyosis",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N80.0",
            "hint": "You need to consult with a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_947",
        "name": "Adhesive capsulitis of shoulder",
        "common_name": "Frozen shoulder",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M75.0",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_270",
        "name": "Adjustment disorder",
        "common_name": "Adjustment disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F43.2",
            "hint": "Please consult a psychologist or a psychiatrist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_160",
        "name": "Adnexitis",
        "common_name": "Pelvic inflammatory disease",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "N70",
            "hint": "You should make an appointment with a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_784",
        "name": "Adrenal cancer",
        "common_name": "Adrenal cancer",
        "sex_filter": "both",
        "categories": [
            "Oncology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C74.9",
            "hint": "You should see an endocrinologist or an oncologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_535",
        "name": "African trypanosomiasis",
        "common_name": "Sleeping sickness",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "B56",
            "hint": "Please see an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_366",
        "name": "Agoraphobia",
        "common_name": "Agoraphobia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F40.0",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_667",
        "name": "Alcohol poisoning",
        "common_name": "Alcohol poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T51.0",
            "hint": "Call an ambulance immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_227",
        "name": "Alcohol withdrawal syndrome",
        "common_name": "Alcohol withdrawal syndrome",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F10.3, F10.4",
            "hint": "You should consult a psychiatrist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_622",
        "name": "Alcoholic cerebellar degeneration",
        "common_name": "Alcoholic cerebellar degeneration",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G31.2",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_6",
        "name": "Alcoholic liver disease",
        "common_name": "Alcoholic liver disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K70",
            "hint": "You need to see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_5",
        "name": "Alcoholism",
        "common_name": "Alcoholism",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F10.2",
            "hint": "Please see a psychiatrist or psychologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_578",
        "name": "Allergic bronchopulmonary aspergillosis",
        "common_name": "Allergic bronchopulmonary aspergillosis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "B44.1, B44.8, B44.9",
            "hint": "Please see a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_3",
        "name": "Allergic conjunctivitis",
        "common_name": "Allergic conjunctivitis",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H10.1",
            "hint": "You should consult an allergist or ophthalmologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_4",
        "name": "Allergic rhinitis",
        "common_name": "Hay fever",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "J30.1, J30.2, J30.3, J30.4",
            "hint": "If your symptoms get worse, see your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_16",
        "name": "Alzheimer's disease",
        "common_name": "Alzheimer's disease",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G30",
            "hint": "Please see a neurologist, and you may also need to consult a geriatrician or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_522",
        "name": "Amebiasis",
        "common_name": "Amebiasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A06",
            "hint": "Please see an infectious disease specialist immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_243",
        "name": "American trypanosomiasis",
        "common_name": "American trypanosomiasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B57",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_874",
        "name": "Ampullary cancer",
        "common_name": "Ampullary cancer",
        "sex_filter": "both",
        "categories": [
            "Oncology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C24.1",
            "hint": "For a proper diagnosis you should see a gastroenterologist and an oncologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_291",
        "name": "Amyloidosis",
        "common_name": "Amyloidosis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E85",
            "hint": "Please consult your family doctor or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_396",
        "name": "Amyotrophic lateral sclerosis",
        "common_name": "Amyotrophic lateral sclerosis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G12.2",
            "hint": "See a neurologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_276",
        "name": "Anal cancer",
        "common_name": "Anal cancer",
        "sex_filter": "both",
        "categories": [
            "Oncology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "C21",
            "hint": "Please consult an oncologist or gastroenterologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_275",
        "name": "Anal fissure",
        "common_name": "Anal fissure",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K60",
            "hint": "Please consult a surgeon or proctologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_866",
        "name": "Anal fistula",
        "common_name": "Anal fistula",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K60.3",
            "hint": "Please see a surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_700",
        "name": "Anaphylaxis",
        "common_name": "Severe allergic reaction",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T78.2",
            "hint": "You may require an immediate medical attention! Call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_372",
        "name": "Anemia of chronic disease",
        "common_name": "Anemia of chronic disease",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D63",
            "hint": "Please consult your family doctor or a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_715",
        "name": "Angioedema",
        "common_name": "Angioedema",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T78.3",
            "hint": "Please consult with a family doctor or an allergist. If you have breathing difficulties call an ambulance immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1049",
        "name": "Ankle contusion",
        "common_name": "Ankle contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S90.0",
            "hint": "Please try available self care measures, if your symptoms don't get better in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1026",
        "name": "Ankle joint dislocation",
        "common_name": "Dislocated ankle",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S93.0",
            "hint": "You should visit a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_222",
        "name": "Ankle osteoarthritis",
        "common_name": "Ankle osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M19.0",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_149",
        "name": "Ankylosing spondylitis",
        "common_name": "Ankylosing spondylitis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M45",
            "hint": "You should be seen by a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_12",
        "name": "Anogenital warts",
        "common_name": "Genital warts",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "A63.0",
            "hint": "Please consult a general pracitioner or dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_7",
        "name": "Anorexia",
        "common_name": "Anorexia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F50.0, F50.1",
            "hint": "You should consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_198",
        "name": "Antiphospholipid syndrome",
        "common_name": "Antiphospholipid syndrome",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "D68.8",
            "hint": "You should see your family doctor, a rheumatologist or a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_117",
        "name": "Anxiety disorder",
        "common_name": "Anxiety disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F41",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_183",
        "name": "Anxiety disorder with panic attacks",
        "common_name": "Anxiety disorder with panic attacks",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F41.0",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_382",
        "name": "Aplastic anemia",
        "common_name": "Aplastic anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D61",
            "hint": "You should consult a hematologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_132",
        "name": "Appendicitis",
        "common_name": "Appendicitis",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K35",
            "hint": "Please report promptly to the nearest hospital."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1039",
        "name": "Arm contusion",
        "common_name": "Arm contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S40.0",
            "hint": "Please try available self care measures, if your symptoms doesnt subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_289",
        "name": "Ascariasis",
        "common_name": "Ascariasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B77",
            "hint": "Please see your family doctor or an infectious disease specialist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_8",
        "name": "Asthma",
        "common_name": "Asthma",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J45, J45.0, J45.1, J45.8, J45.9",
            "hint": "Please consult a general practitioner or a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_972",
        "name": "Asthma exacerbation",
        "common_name": "Asthma exacerbation",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J45, J45.0, J45.1, J45.8, J45.9, J46",
            "hint": "Use your antiasthmaticc drugs as your physician recommended you to do in such situation. Make an appointment with your GP. If your symptoms are severe, seek immediate medical attention!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_2",
        "name": "Atopic dermatitis",
        "common_name": "Eczema",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "L20",
            "hint": "Please see an allergist or dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_48",
        "name": "Atrial fibrillation",
        "common_name": "Atrial fibrillation",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I48",
            "hint": "You may urgently need to be seen by a cardiologist! Ask someone nearby to help you."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_928",
        "name": "Atrophic vaginitis",
        "common_name": "Atrophy of vagina",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N95.2",
            "hint": "You should meet a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_581",
        "name": "Attention deficit hyperactivity disorder",
        "common_name": "Attention deficit hyperactivity disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F90",
            "hint": "Please consult your family doctor or a psychologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_485",
        "name": "Autoimmune hepatitis",
        "common_name": "Autoimmune hepatitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "K75.4",
            "hint": "You should consult a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1050",
        "name": "Back and pelvis contusion",
        "common_name": "Back and pelvis contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S30.0",
            "hint": "Please try available self care measures, if your symptoms do not subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1077",
        "name": "Bacterial gastroenteritis",
        "common_name": "Bacterial gastroenteritis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A04, A04.9, A09, K52.8, K52.9",
            "hint": "You should see a family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_563",
        "name": "Bacterial meningitis",
        "common_name": "Bacterial meningitis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "G00, G01",
            "hint": "Please see a doctor immediately or call an ambulance."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_128",
        "name": "Bacterial vaginitis",
        "common_name": "Bacterial vaginitis",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N76.0",
            "hint": "You should make an appointment with a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_910",
        "name": "Baker's cyst",
        "common_name": "Baker's cyst",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M71.2",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_134",
        "name": "Balanoposthitis",
        "common_name": "Balanoposthitis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N48.1",
            "hint": "You should see a urologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_751",
        "name": "Bartholin's abscess",
        "common_name": "Bartholin's abscess",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "N75.1",
            "hint": "You should see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_110",
        "name": "Bartholin's cyst",
        "common_name": "Vulvar cyst",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N75.0",
            "hint": "You ought to see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_531",
        "name": "Behçet's disease",
        "common_name": "Behçet's disease",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "M35.2",
            "hint": "You should visit a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_919",
        "name": "Benign ovarian tumor",
        "common_name": "Benign ovarian tumor",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D27",
            "hint": "You should consult a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_871",
        "name": "Benign paroxysmal positional vertigo",
        "common_name": "Benign paroxysmal positional vertigo",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H81.1",
            "hint": "Please see your family doctor or an otolaryngologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_81",
        "name": "Benign prostatic hyperplasia",
        "common_name": "Benign prostatic hyperplasia",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N40",
            "hint": "It would be a good idea to see a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_273",
        "name": "Bipolar disorder",
        "common_name": "Bipolar disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F31",
            "hint": "Please consult a psychologist or a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_612",
        "name": "Biventricular heart failure",
        "common_name": "Biventricular heart failure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I50",
            "hint": "Please see a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_185",
        "name": "Bladder cancer",
        "common_name": "Bladder cancer",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C67",
            "hint": "See an oncologist or your primary care physician as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_769",
        "name": "Blepharitis",
        "common_name": "Blepharitis",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "H01.0",
            "hint": "You should consult an ophthalmologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1095",
        "name": "Blunt abdominal trauma",
        "common_name": "Blunt stomach trauma",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S39.0, S39.6, S39.7, S39.8, S39.9",
            "hint": "Please report to a trauma centre"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_432",
        "name": "Botulism",
        "common_name": "Botulism",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A05.1",
            "hint": "You need help. Call an ambulance as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_916",
        "name": "Bradycardia",
        "common_name": "Bradycardia",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "R00.1",
            "hint": "You should visit a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_680",
        "name": "Brain abscess",
        "common_name": "Brain abscess",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "A06.6, B43.1, G06.0",
            "hint": "Please consult an infectious disease specialist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_333",
        "name": "Brain tumor",
        "common_name": "Brain tumor",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C71, D33.0, D33.1, D33.2",
            "hint": "See a neurologist immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1018",
        "name": "Braincase fracture",
        "common_name": "Broken skull",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S02.0, S02.1, S02.7",
            "hint": "Please report to an emergency unit as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_93",
        "name": "Breast cancer",
        "common_name": "Breast cancer",
        "sex_filter": "female",
        "categories": [
            "Oncology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C50",
            "hint": "See an oncologist as soon as possible. You may also need to see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_235",
        "name": "Brucellosis",
        "common_name": "Brucellosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A23",
            "hint": "You should see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_524",
        "name": "Budd-Chiari syndrome",
        "common_name": "Budd-Chiari syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I82.0",
            "hint": "You should see a doctor immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_14",
        "name": "Bulimia",
        "common_name": "Bulimia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F50.2, F50.3",
            "hint": "You should consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_845",
        "name": "Burn",
        "common_name": "Burn",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "T29, T30, T30.1, T30.2, T30.3, T30.4, T30.5, T30.6, T30.7",
            "hint": "Please report to a doctor for examination."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_712",
        "name": "Bursitis",
        "common_name": "Bursitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M71.9",
            "hint": "Please consult a family doctor or orthopedic surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_161",
        "name": "Carbon monoxide poisoning",
        "common_name": "Carbon monoxide poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T58, X47, X67, Y17",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_415",
        "name": "Carcinoid syndrome",
        "common_name": "Carcinoid syndrome",
        "sex_filter": "both",
        "categories": [
            "Oncology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E34.0",
            "hint": "See a doctor immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_649",
        "name": "Cardiac tamponade",
        "common_name": "Cardiac tamponade",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I31.9",
            "hint": "Call an ambulance immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_677",
        "name": "Cardiogenic shock",
        "common_name": "Cardiogenic shock",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "R57.0",
            "hint": "You may require an immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_736",
        "name": "Carotid artery disease",
        "common_name": "Carotid artery disease",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I65.2",
            "hint": "You should contact with angiologist or vascular surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_381",
        "name": "Carotid artery dissection",
        "common_name": "Carotid artery dissection",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I72.0",
            "hint": "Please see a neurologist as soon as possible. You need emergency help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_451",
        "name": "Carotid sinus syndrome",
        "common_name": "Carotid sinus syndrome",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G90.0",
            "hint": "Please consult a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_212",
        "name": "Carpal tunnel syndrome",
        "common_name": "Carpal tunnel syndrome",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G56.0",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_242",
        "name": "Cat-scratch disease",
        "common_name": "Cat-scratch disease",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A28.1",
            "hint": "Please see your family doctor or an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_176",
        "name": "Cataract",
        "common_name": "Cataract",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H25",
            "hint": "Please see an ophthalmologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_614",
        "name": "Cavernous sinus thrombosis",
        "common_name": "Cavernous sinus thrombosis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G08",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby to help you or seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_15",
        "name": "Celiac disease",
        "common_name": "Celiac disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "K90.0",
            "hint": "See a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_379",
        "name": "Cerebellar stroke",
        "common_name": "Cerebellar stroke",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G46.4",
            "hint": "Please consult a neurologist as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_471",
        "name": "Cerebellopontine angle syndrome",
        "common_name": "Acoustic neuroma",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "D43.1",
            "hint": "Please see a neurologist urgently!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_899",
        "name": "Cervical acceleration-deceleration syndrome",
        "common_name": "Whiplash injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S13.4",
            "hint": "You should report to a trauma surgeon or orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_96",
        "name": "Cervical cancer",
        "common_name": "Cervical cancer",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C53",
            "hint": "For a proper diagnosis you must see a gynecologist. You will also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1108",
        "name": "Cervical radiculopathy",
        "common_name": "Cervical neuropathy",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M54.1",
            "hint": "You should be seen by an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_975",
        "name": "Cervical strain",
        "common_name": "Neck strain",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "M43.6, S13.6",
            "hint": "Try available painkiller remedies. If you don't get better in following days, please visit your GP."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1024",
        "name": "Cervical vertebra fracture",
        "common_name": "Neck fracture",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S12.0, S12.1, S12.2, S12.7, S12.9",
            "hint": "Call an ambulance, you need to be transported to a trauma center."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_129",
        "name": "Cervicitis",
        "common_name": "Acute inflammation of the uterine cervix",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N72",
            "hint": "You should see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_171",
        "name": "Chalazion",
        "common_name": "Chalazion",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H00.1",
            "hint": "You need to see an ophthalmologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_976",
        "name": "Chest pain, unspecified",
        "common_name": "Unspecific chest pain",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "common",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R07.3, R07.4",
            "hint": "Please consult with your doctor if the pain lasts more than 24 hours."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_68",
        "name": "Chickenpox",
        "common_name": "Chickenpox",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "B01.9",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_902",
        "name": "Chikungunya virus infection",
        "common_name": "Chikungunya virus infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A92.0",
            "hint": "Please see your family doctor or an infectious diseases specialist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_481",
        "name": "Chinese restaurant syndrome",
        "common_name": "Chinese restaurant syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "T47",
            "hint": "Please see your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1101",
        "name": "Chlamydial genitourinary infection",
        "common_name": "Chlamydiosis",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "A56",
            "hint": "Please see a venereologist or your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_215",
        "name": "Cholecystitis",
        "common_name": "Inflammation of the gallbladder",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K81.0",
            "hint": "You should see a surgeon."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_38",
        "name": "Cholecystolithiasis",
        "common_name": "Gallstones within the gallbladder",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "K80.2",
            "hint": "Please see a general practitioner or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_254",
        "name": "Cholera",
        "common_name": "Cholera",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A00",
            "hint": "Please see a doctor immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_707",
        "name": "Cholestasis",
        "common_name": "Cholestasis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K71.0",
            "hint": "You need to be evaluated by a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1071",
        "name": "Cholestasis of pregnancy",
        "common_name": "Cholestasis of pregnancy",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "O26.6",
            "hint": "You need to consult your gynecologist or obstetrician."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_557",
        "name": "Choriocarcinoma",
        "common_name": "Choriocarcinoma",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "C58",
            "hint": "For a proper diagnosis you must see a gynecologist. You will also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_282",
        "name": "Chronic cannabinoid use",
        "common_name": "Chronic cannabinoid use",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F12",
            "hint": "Please see a psychologist or psychiatrist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_674",
        "name": "Chronic constipation",
        "common_name": "Chronic constipation",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K59.0",
            "hint": "Please visit your family doctor or a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_668",
        "name": "Chronic fatigue syndrome",
        "common_name": "Chronic fatigue syndrome",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F48.0, R53",
            "hint": "You should consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1003",
        "name": "Chronic heart failure",
        "common_name": "Chronic heart failure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I11.0, I50",
            "hint": "Please see a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_494",
        "name": "Chronic intestinal ischemia",
        "common_name": "Chronic intestinal ischemia",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K55.1",
            "hint": "You need to see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_180",
        "name": "Chronic kidney disease",
        "common_name": "Chronic kidney disease",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N18",
            "hint": "Please see a nephrologist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_82",
        "name": "Chronic lymphocytic leukemia",
        "common_name": "Chronic lymphocytic leukemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C91.1",
            "hint": "For a proper diagnosis you must see a hematologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_83",
        "name": "Chronic myelogenous leukemia",
        "common_name": "Chronic myelogenous leukemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C92.1",
            "hint": "For a proper diagnosis you must see a hematologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_76",
        "name": "Chronic obstructive pulmonary disease",
        "common_name": "Chronic obstructive pulmonary disease",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J44, J44.8, J44.9",
            "hint": "Please consult a general practitioner or a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_973",
        "name": "Chronic obstructive pulmonary disease exacerbation",
        "common_name": "Chronic obstructive pulmonary disease exacerbation",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J44.0, J44.1",
            "hint": "Use the drugs and measures your doctor recommended you. Make and appointment with your doctor. If your symptoms are severe, seek an immediate medical help!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_86",
        "name": "Chronic pancreatitis",
        "common_name": "Chronic pancreatitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K86.0, K86.1",
            "hint": "You need to see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_269",
        "name": "Chronic sinusitis",
        "common_name": "Chronic sinusitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J32",
            "hint": "Please consult an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_669",
        "name": "Chronic tonsillitis",
        "common_name": "Chronic tonsillitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J35.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1112",
        "name": "Chronic urticaria",
        "common_name": "Chronic hives",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "L50",
            "hint": "Please report to a family physician or dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_84",
        "name": "Chronic venous insufficiency",
        "common_name": "Chronic venous insufficiency",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "I87.2",
            "hint": "Consult your family doctor, an angiologist, or a vascular surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_267",
        "name": "Churg-Strauss syndrome",
        "common_name": "Churg-Strauss syndrome",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M30.1",
            "hint": "Please see your family doctor or an angiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_503",
        "name": "Cirrhosis of the liver",
        "common_name": "Cirrhosis of the liver",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K70.3, K74.6",
            "hint": "Please consult a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1051",
        "name": "Clavicle fracture",
        "common_name": "Broken collarbone",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S42.0",
            "hint": "You should promptly report to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_39",
        "name": "Cluster headaches",
        "common_name": "Cluster headaches",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "G44.0",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_837",
        "name": "Cold urticaria",
        "common_name": "Cold urticaria",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "L50.2",
            "hint": "Please see a dermatologist or an allergist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_90",
        "name": "Colon cancer",
        "common_name": "Colon cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C18, C78.5",
            "hint": "For a proper diagnosis you should see a gastroenterologist and an oncologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_87",
        "name": "Common cold",
        "common_name": "Common cold",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "J00",
            "hint": "If your symptoms get worse, see your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_672",
        "name": "Concussion",
        "common_name": "Concussion",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S06.0",
            "hint": "Please visit a neurologist as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_172",
        "name": "Conjunctivitis",
        "common_name": "Pink eye",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "common",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B30.1, B30.3, B30.8, B30.9, H10, H13.1, H13.2",
            "hint": "You should see your family doctor or an ophthalmologist. Viral or bacterial conjunctivitis are very contagious, so remember about personal hygiene to reduce the risk of spreading it to others (avoid touching your eyes, wash your hands often, do not share personal items, such as pillows, towels, eyeglasses)."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_449",
        "name": "Conn's syndrome",
        "common_name": "Conn's syndrome",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "E26.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_670",
        "name": "Contact dermatitis",
        "common_name": "Contact dermatitis",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L25",
            "hint": "You should consult a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_174",
        "name": "Corneal abrasion",
        "common_name": "Corneal abrasion",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S05.0",
            "hint": "Please see an ophthalmologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_175",
        "name": "Corneal ulceration",
        "common_name": "Corneal ulceration",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "H16.0",
            "hint": "Please see an ophthalmologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_847",
        "name": "Corns and callosities",
        "common_name": "Corns and callosities",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L84",
            "hint": "If a corn or callus becomes very painful or inflamed, see your doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_545",
        "name": "Corticotropin releasing pituitary adenoma",
        "common_name": "Corticotropin releasing pituitary adenoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D35.2, E24.0",
            "hint": "You should visit an endocrinologist or oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_746",
        "name": "Costochondritis",
        "common_name": "Costochondritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "M94.0",
            "hint": "See your family doctor. You may also need to consult a traumatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_971",
        "name": "Cough, unspecified",
        "common_name": "Unspecific cough",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "R05",
            "hint": "If your symptoms get worse, see your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_17",
        "name": "Crohn's disease",
        "common_name": "Crohn's disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "K50",
            "hint": "You need to see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_811",
        "name": "Cruciate ligament injury",
        "common_name": "Cruciate ligament injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "S83.5",
            "hint": "You should visit a trauma surgeon or an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_141",
        "name": "Cushing's syndrome",
        "common_name": "Cushing's syndrome",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "E24",
            "hint": "Please visit an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_188",
        "name": "Cystic fibrosis",
        "common_name": "Cystic fibrosis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E84",
            "hint": "Please consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_434",
        "name": "Cysticercosis",
        "common_name": "Cysticercosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B69",
            "hint": "Please consult an infectious disease specialist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_927",
        "name": "De Quervain syndrome",
        "common_name": "De Quervain syndrome",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M65.4",
            "hint": "Please consult a family doctor an orthopedist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_431",
        "name": "De Quervain's thyroiditis",
        "common_name": "De Quervain's thyroiditis",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E06.1",
            "hint": "Please consult an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_303",
        "name": "Death cap poisoning",
        "common_name": "Death cap poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T62.0",
            "hint": "You may need immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_891",
        "name": "Decompression sickness",
        "common_name": "Decompression sickness",
        "sex_filter": "both",
        "categories": [
            "Other"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T70.3",
            "hint": "You may need immediate medical attention! Ask someone nearby for help and seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_148",
        "name": "Deep vein thrombosis",
        "common_name": "Deep vein thrombosis",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I80.2",
            "hint": "Please consult a vascular surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_576",
        "name": "Degenerative disc disease of the cervical spine",
        "common_name": "Degenerative disc disease of the cervical spine",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M50.1, M50.2, M50.3, M50.8, M50.9",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_30",
        "name": "Degenerative disc disease of the lumbar and sacral spine",
        "common_name": "Degenerative disc disease of the lumbar and sacral spine",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "M51.1, M51.2, M51.3, M51.8, M51.9",
            "hint": "It would be a good idea to see an orthopedist or a neurologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_577",
        "name": "Degenerative disc disease of the thoracic spine",
        "common_name": "Degenerative disc disease of the thoracic spine",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M51.1, M51.2, M51.3, M51.8, M51.9",
            "hint": "Please see an orthopedist or a neurologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_298",
        "name": "Dehydration",
        "common_name": "Dehydration",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E86",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_260",
        "name": "Dementia",
        "common_name": "Dementia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F02, F03",
            "hint": "Please consult a psychologist or psychiatrist, as well as your primary doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_245",
        "name": "Dengue fever",
        "common_name": "Dengue fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A97",
            "hint": "Please see an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_79",
        "name": "Dental caries",
        "common_name": "Dental caries",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K02",
            "hint": "Please see your dentist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_146",
        "name": "Dental pulp gangrene",
        "common_name": "Dental pulp gangrene",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K04.1",
            "hint": "See a dentist immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_963",
        "name": "Dental trauma",
        "common_name": "Tooth injury",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S02.5, S03.2",
            "hint": "You should visit a dental emergency unit as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_754",
        "name": "Depersonalization-derealization disorder",
        "common_name": "Depersonalization-derealization disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F48.1",
            "hint": "Please see a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_315",
        "name": "Dermatomyositis",
        "common_name": "Dermatomyositis",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M33",
            "hint": "Please see a dermatologist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_407",
        "name": "Diabetes insipidus",
        "common_name": "Diabetes insipidus",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E23.2",
            "hint": "Consult an endocrinologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_404",
        "name": "Diabetes mellitus type 1",
        "common_name": "Diabetes mellitus type 1",
        "sex_filter": "both",
        "categories": [
            "Diabetology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E10",
            "hint": "You should urgently consult your family doctor, an internist or an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_405",
        "name": "Diabetes mellitus type 2",
        "common_name": "Diabetes mellitus type 2",
        "sex_filter": "both",
        "categories": [
            "Diabetology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E11",
            "hint": "Please see your family doctor, a diabetologist or an endocrinologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_753",
        "name": "Diabetic nephropathy",
        "common_name": "Diabetic kidney disease",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N08.3",
            "hint": "You should see a nephrologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_439",
        "name": "Diabetic neuropathy",
        "common_name": "Diabetic neuropathy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E10.4, E11.4, E12.4, E13.4, E14.4, G59.0, G63.2",
            "hint": "Please consult an endocrinologist or a diabetologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_771",
        "name": "Diabetic retinopathy",
        "common_name": "Diabetic retinopathy",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H36.0",
            "hint": "Please see an ophthalmologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_965",
        "name": "Diarrhea, unspecified",
        "common_name": "Unspecific diarrhea",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "K52.8, K52.9, R19.4",
            "hint": "Please, contact your family doctor if your symptoms don't get better in one day."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_759",
        "name": "Dilated cardiomyopathy",
        "common_name": "Dilated cardiomyopathy",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I42.0",
            "hint": "You should talk with a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_967",
        "name": "Disorder of the skin and subcutaneous tissue, unspecified",
        "common_name": "Unspecific skin disorder",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R23.8",
            "hint": "Please schedule an appointment with your family doctor or a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_190",
        "name": "Disulfiram-like reaction",
        "common_name": "Disulfiram-like reaction",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F10.9",
            "hint": "See a doctor as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_186",
        "name": "Diverticulitis",
        "common_name": "Diverticulitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K57",
            "hint": "See your family doctor or a surgeon as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_113",
        "name": "Diverticulosis",
        "common_name": "Diverticulosis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K57",
            "hint": "You ought to see a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_998",
        "name": "Dry eye disease",
        "common_name": "Dry eye syndrome",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H04.1",
            "hint": "Try to use hydrating eye drops daily. If this doesn't help, consult your general practitioner."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_11",
        "name": "Dysmenorrhea",
        "common_name": "Painful menstruation",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N94.4, N94.5, N94.6",
            "hint": "You should see a gynecologist, and you may also have to consult an endocrinologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_688",
        "name": "Ear barotrauma",
        "common_name": "Ear barotrauma",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "T70",
            "hint": "Please visit a family doctor or an otolaryngologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_808",
        "name": "Earwax blockage",
        "common_name": "Earwax blockage",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H61.2",
            "hint": "You should consult otolaryngologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_435",
        "name": "Echinococcosis",
        "common_name": "Echinococcosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B67",
            "hint": "See an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_985",
        "name": "Eclampsia",
        "common_name": "Eclampsia",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O15",
            "hint": "You may need immediate medical attention. Please visit a ginecological emergency unit."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_627",
        "name": "Ectopic pregnancy",
        "common_name": "Ectopic pregnancy",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O00",
            "hint": "You should visit obstetrician-gynecologist immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_991",
        "name": "Edema in pregnancy",
        "common_name": "Edema in pregnancy",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "O12.0",
            "hint": "If any other worrisome symptom show up, please consult your family doctor or gynecologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1041",
        "name": "Elbow contusion",
        "common_name": "Elbow contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S50.0",
            "hint": "Please try available self care measures, if your symptoms doesnt subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1025",
        "name": "Elbow dislocation",
        "common_name": "Dislocated elbow",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S53.0, S53.1",
            "hint": "You should go to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1109",
        "name": "Electrical injury",
        "common_name": "Electrical injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "T75.0, T75.4",
            "hint": "Report to a hospital promptly"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_671",
        "name": "Encephalitis",
        "common_name": "Encephalitis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G04.0",
            "hint": "Please see a neurologist or an infectious disease specialist immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_88",
        "name": "Endometrial cancer",
        "common_name": "Endometrial cancer",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C54.1",
            "hint": "For a proper diagnosis you should see a gynecologist, and you may also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_940",
        "name": "Endometrial polyp",
        "common_name": "Endometrial polyp",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "N84.0",
            "hint": "You should see a gynaecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_31",
        "name": "Endometriosis",
        "common_name": "Endometriosis",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "N80",
            "hint": "You need to be under the care of a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_166",
        "name": "Enterobiasis",
        "common_name": "Pinworm infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B80",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_894",
        "name": "Epicondylitis",
        "common_name": "Epicondylitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M77.0, M77.1",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1075",
        "name": "Epilepsy with loss of consciousness",
        "common_name": "Epilepsy with loss of consciousness",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "G40.3, G40.4, G40.6, G41.0",
            "hint": "You will need to see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1074",
        "name": "Epilepsy without loss of consciousness",
        "common_name": "Epilepsy without loss of consciousness",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "G40.0, G40.1, G40.2, G40.7, G41.1, G41.2",
            "hint": "You will need to see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_983",
        "name": "Epistaxis",
        "common_name": "Nosebleed",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "R04.0",
            "hint": "Try basic self care measures, pinch your nose just above your nostrils for 10 to 15 minutes or place an icepack at the top of your nose. If those doesn't help or bleeding is profound, please report to an outpatient clinic."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_169",
        "name": "Erysipelas",
        "common_name": "Erysipelas",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A46",
            "hint": "Please see your primary care physician."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_94",
        "name": "Esophageal cancer",
        "common_name": "Esophageal cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C15",
            "hint": "For a proper diagnosis you need to see a gastroenterologist and an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_496",
        "name": "Esophageal diverticula",
        "common_name": "Esophageal diverticula",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K22.5, Q39.6",
            "hint": "Please consult a surgeon or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_421",
        "name": "Essential thrombocytosis",
        "common_name": "Essential thrombocythemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D47.3",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_29",
        "name": "Essential tremor",
        "common_name": "Essential tremor",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G25.0",
            "hint": "You will have to see a neurologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1054",
        "name": "External ear injury",
        "common_name": "Injured ear",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S00.4, S01.3",
            "hint": "Please visit an emergency care unit."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_28",
        "name": "Extrasystoles",
        "common_name": "Extrasystoles",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "I49.1, I49.2, I49.3, I49.4, I49.9",
            "hint": "Please see a cardiologist, who will evaluate your condition."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_959",
        "name": "Eye injury",
        "common_name": "Eye injury",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S05",
            "hint": "You should promptly contact with your family doctor or an opthalmologist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1015",
        "name": "Facial bones fracture",
        "common_name": "Broken facial bones",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S02",
            "hint": "Report to an emergency unit as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1046",
        "name": "Facial contusion",
        "common_name": "Facial contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S00.8, S00.9",
            "hint": "Please try available self care measures, if your symptoms don't get better in 24-48 hours please visit your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_467",
        "name": "Facial nerve palsy",
        "common_name": "Facial nerve palsy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G51",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_426",
        "name": "Fasciolosis",
        "common_name": "Fascioliasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B66.9",
            "hint": "Please consult an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_80",
        "name": "Fatigue",
        "common_name": "Fatigue",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R53",
            "hint": "Please see your family doctor or an internist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1055",
        "name": "Femur fracture",
        "common_name": "Broken thigh bone",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S72",
            "hint": "Consult orthopaedist as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_778",
        "name": "Fibroadenoma of breast",
        "common_name": "Fibroadenoma of breast",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D24",
            "hint": "Please see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_739",
        "name": "Fibrocystic breasts",
        "common_name": "Fibrocystic breasts",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "N60.1",
            "hint": "Please consult a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_598",
        "name": "Fibromyalgia",
        "common_name": "Fibromyalgia",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M79.7",
            "hint": "Please consult a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1044",
        "name": "Finger contusion",
        "common_name": "Finger contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S60.1",
            "hint": "Please try available self care measures, if your symptoms don't get better in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1029",
        "name": "Finger dislocation",
        "common_name": "Dislocated finger",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S63.1",
            "hint": "You should promptly visit a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1012",
        "name": "Finger fracture",
        "common_name": "Broken finger",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S62.6",
            "hint": "Consult orthopaedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_592",
        "name": "Folate-deficiency anemia",
        "common_name": "Folate-deficiency anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D52, D52.9, E53.8",
            "hint": "See your family doctor or a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_832",
        "name": "Food allergy",
        "common_name": "Food allergy",
        "sex_filter": "both",
        "categories": [
            "Allergology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "T78.1",
            "hint": "You should visit your family doctor or an allergist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_138",
        "name": "Food poisoning",
        "common_name": "Food poisoning",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A05",
            "hint": "If you feel very sick, see a doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1019",
        "name": "Foot bones fracture",
        "common_name": "Broken foot",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S92",
            "hint": "You should promptly visit the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1056",
        "name": "Foot contusion",
        "common_name": "Foot contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S90.3",
            "hint": "Please try available self care measures, if your symptoms don't get better in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_223",
        "name": "Foot osteoarthritis",
        "common_name": "Foot osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M19",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1057",
        "name": "Forearm bones fracture",
        "common_name": "Broken forearm",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S52",
            "hint": "You should go to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1035",
        "name": "Forearm contusion",
        "common_name": "Forearm contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S50.1, S50.7, S50.8, S50.9",
            "hint": "Please try available self care measures, if your symptoms doesnt subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_887",
        "name": "Foreign body aspiration",
        "common_name": "Foreign body aspiration",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T17",
            "hint": "You may require immediate medical assistance. Seek emergency care."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_815",
        "name": "Functional dyspepsia",
        "common_name": "Indigestion",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "common",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K30",
            "hint": "Please see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_915",
        "name": "Functional ovarian cyst",
        "common_name": "Cyst of an ovary",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N83.0",
            "hint": "You should consult a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_723",
        "name": "Furuncles, carbuncles and cutaneous abscesses",
        "common_name": "Skin abscess",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H60.0, L02",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_65",
        "name": "Gall bladder and bile duct cancer",
        "common_name": "Gall bladder and bile duct cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C22.1, C23, C24",
            "hint": "For a proper diagnosis you need to see a gastroenterologist and an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_992",
        "name": "Gambling addiction",
        "common_name": "Pathological gambling",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F63.0, Z72.6",
            "hint": "Please see a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_66",
        "name": "Gastric cancer",
        "common_name": "Gastric cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C16",
            "hint": "For a proper diagnosis you need to see a gastroenterologist and an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_515",
        "name": "Gastritis",
        "common_name": "Gastritis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K29.0",
            "hint": "Please see an internist or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_101",
        "name": "Gastroesophageal reflux disease",
        "common_name": "Gastroesophageal reflux disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K21",
            "hint": "If your symptoms get worse, please see your family doctor or a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_225",
        "name": "General anxiety disorder",
        "common_name": "General anxiety disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F41.1",
            "hint": "Please consult a psychologist or a psychiatrist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_534",
        "name": "Genital herpes",
        "common_name": "Genital herpes",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "A60",
            "hint": "Please see your family doctor or a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_960",
        "name": "Genital injury",
        "common_name": "Crotch injury",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S38.0, S38.2",
            "hint": "You should visit an urological|gynecological emergency unit as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_532",
        "name": "Gestational diabetes",
        "common_name": "Diabetes in pregnancy",
        "sex_filter": "female",
        "categories": [
            "Diabetology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "O24",
            "hint": "You should see your family doctor, a diabetologist or an endocrinologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_165",
        "name": "Giardiasis",
        "common_name": "Giardiasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "A07.1",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_34",
        "name": "Gilbert's syndrome",
        "common_name": "Gilbert's syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E80.4",
            "hint": "You need to see a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_120",
        "name": "Gingivitis",
        "common_name": "Gingivitis",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K05",
            "hint": "You should see a dentist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_447",
        "name": "Gitelman syndrome",
        "common_name": "Gitelman syndrome",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N25.8",
            "hint": "Please consult a nephrologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_374",
        "name": "Glomerulonephritis",
        "common_name": "Glomerulonephritis",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N00, N01, N02, N03, N05, N06",
            "hint": "Please see your family doctor, an internist or a nephrologist urgently."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_247",
        "name": "Glossitis",
        "common_name": "Glossitis",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K14.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_734",
        "name": "Goiter",
        "common_name": "Goiter",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E04.9",
            "hint": "You should contact with an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_159",
        "name": "Gonorrhea",
        "common_name": "Gonorrhea",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A54",
            "hint": "Please see a venereologist or your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_464",
        "name": "Goodpasture's syndrome",
        "common_name": "Goodpasture's syndrome",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "M31.0",
            "hint": "You should visit a rheumatologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_27",
        "name": "Gout",
        "common_name": "Gout",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "M10",
            "hint": "You need to see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_264",
        "name": "Granulomatosis with polyangiitis",
        "common_name": "Granulomatosis with polyangiitis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M31.3",
            "hint": "Please consult a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_427",
        "name": "Graves' disease",
        "common_name": "Graves' disease",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E05.0",
            "hint": "Please consult an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_938",
        "name": "Greater trochanteric pain syndrome",
        "common_name": "Hip bursitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M70.6",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_314",
        "name": "Guillain-Barré syndrome",
        "common_name": "Guillain-Barré syndrome",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "G61.0",
            "hint": "You may need immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_986",
        "name": "HELLP syndrome",
        "common_name": "HELLP syndrome",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O14.2",
            "hint": "You should go to hospital as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1016",
        "name": "Hand bones fracture",
        "common_name": "Broken hand bones",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S62",
            "hint": "Consult orthopaedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_219",
        "name": "Hand osteoarthritis",
        "common_name": "Hand osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M19",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_137",
        "name": "Hangover",
        "common_name": "Hangover",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "F10.0",
            "hint": "If you feel very sick, see a doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_428",
        "name": "Hashimoto's thyroiditis",
        "common_name": "Hashimoto’s disease",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E06.3",
            "hint": "Please consult a general practitioner or an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1040",
        "name": "Head and neck unspecified injury",
        "common_name": "Unspecified head and neck injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S09.9",
            "hint": "You should promptly report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_897",
        "name": "Heart valve disease",
        "common_name": "Heart valve disease",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I05, I06, I07, I08, I09.8, I34, I35, I36, I37",
            "hint": "You should counsult with a cardiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_424",
        "name": "Heat and sun-related illness",
        "common_name": "Heat and sun-related illness",
        "sex_filter": "both",
        "categories": [
            "Other"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T67",
            "hint": "See your family doctor as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_328",
        "name": "Hemochromatosis",
        "common_name": "Hemochromatosis",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E83.1",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_60",
        "name": "Hemolytic anemia",
        "common_name": "Hemolytic anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "D55, D58, D59",
            "hint": "Make an appointment with a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_606",
        "name": "Hemolytic-uremic syndrome",
        "common_name": "Hemolytic-uremic syndrome",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D59.3",
            "hint": "You need immediate medical attention. Call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_514",
        "name": "Hemophagocytic lymphohistiocytosis",
        "common_name": "Hemophagocytic lymphohistiocytosis",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D76.1",
            "hint": "Call an ambulance immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_386",
        "name": "Hemophilia A",
        "common_name": "Hemophilia A",
        "sex_filter": "male",
        "categories": [
            "Hematology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "D66",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_387",
        "name": "Hemophilia B",
        "common_name": "Hemophilia B",
        "sex_filter": "male",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "D67",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_371",
        "name": "Hemorrhagic anemia",
        "common_name": "Acute anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D62",
            "hint": "Please consult a family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_147",
        "name": "Hemorrhoids",
        "common_name": "Hemorrhoids",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K64",
            "hint": "You will need to see a proctologist or a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_463",
        "name": "Henoch-Schönlein purpura",
        "common_name": "Henoch-Schönlein purpura",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D69.0",
            "hint": "Please see a hematologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_590",
        "name": "Hepatic abscess",
        "common_name": "Hepatic abscess",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K75.0",
            "hint": "You may need a surgical consultation."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_443",
        "name": "Hepatic encephalopathy",
        "common_name": "Hepatic encephalopathy",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K72",
            "hint": "Call an ambulance immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_285",
        "name": "Hepatitis",
        "common_name": "Hepatitis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "B19.9, K75.9",
            "hint": "Please see an infectious disease specialist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_477",
        "name": "Hepatitis A",
        "common_name": "Hepatitis A",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B15",
            "hint": "Please see your family doctor andinfectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_478",
        "name": "Hepatitis B",
        "common_name": "Hepatitis B",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "B16.9, B18.1",
            "hint": "Please consult an infectious disease specialist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_479",
        "name": "Hepatitis C",
        "common_name": "Hepatitis C",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "B17.1, B18.2",
            "hint": "Please consult an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_294",
        "name": "Herbicide poisoning",
        "common_name": "Herbicide poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T60.3",
            "hint": "You may need immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_465",
        "name": "High altitude sickness",
        "common_name": "High altitude sickness",
        "sex_filter": "both",
        "categories": [
            "Other"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "T70.2",
            "hint": "See the nearest doctor as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1047",
        "name": "Hip contusion",
        "common_name": "Hip contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S70.0",
            "hint": "Please try available self care measures, if your symptoms don't subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1031",
        "name": "Hip dislocation",
        "common_name": "Dislocated hip",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S73.0",
            "hint": "You should visit a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_221",
        "name": "Hip osteoarthritis",
        "common_name": "Hip osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M16",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_181",
        "name": "Hodgkin's lymphoma",
        "common_name": "Hodgkin's lymphoma",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C81",
            "hint": "See your family doctor or a hematologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_290",
        "name": "Hookworm infection",
        "common_name": "Hookworm disease",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B76",
            "hint": "Please see your family doctor or an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_287",
        "name": "Horner's syndrome",
        "common_name": "Horner's syndrome",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G90.2",
            "hint": "Please see a neurologist urgently!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1070",
        "name": "Humerus fracture",
        "common_name": "Broken arm",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S42.2, S42.3, S42.4",
            "hint": "You should report to a trauma unit immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_525",
        "name": "Hydrocele testis",
        "common_name": "Hydrocele testis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N43",
            "hint": "Please consult a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_53",
        "name": "Hyperandrogenism",
        "common_name": "Hyperandrogenism",
        "sex_filter": "female",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E28.1",
            "hint": "Please see an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_51",
        "name": "Hyperparathyroidism",
        "common_name": "Hyperparathyroidism",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E21.0, E21.1, E21.2, E21.3",
            "hint": "You should be seen by an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_920",
        "name": "Hyperprolactinemia",
        "common_name": "Hyperprolactinemia",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E22.1",
            "hint": "Please see a gynaecologist or endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_50",
        "name": "Hypertension",
        "common_name": "High blood pressure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "common",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "I10, I15",
            "hint": "Consult your family doctor, and please see a cardiologist periodically."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_461",
        "name": "Hypertensive crisis",
        "common_name": "Hypertensive crisis",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "H35.0, I11.0, I12.0, I67.4",
            "hint": "Please see a doctor immediately or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_462",
        "name": "Hypertensive encephalopathy",
        "common_name": "Hypertensive encephalopathy",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I67.4",
            "hint": "You need to see a doctor immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_52",
        "name": "Hyperthyroidism",
        "common_name": "Hyperthyroidism",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E05",
            "hint": "Please see an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_446",
        "name": "Hypoglycemia",
        "common_name": "Hypoglycemia",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E16.2",
            "hint": "See your family doctor as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_58",
        "name": "Hypoparathyroidism",
        "common_name": "Hypoparathyroidism",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "E20",
            "hint": "Please make an appointment with an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_196",
        "name": "Hypopituitarism",
        "common_name": "Hypopituitarism",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E23.0",
            "hint": "Please consult an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_35",
        "name": "Hypotension",
        "common_name": "Hypotension",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "I95.0",
            "hint": "See your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_59",
        "name": "Hypothyroidism",
        "common_name": "Hypothyroidism",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E01, E02, E03, E03.9",
            "hint": "You will have to consult a general practitioner or an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_956",
        "name": "Hypovolemic shock",
        "common_name": "Hypovolemic shock",
        "sex_filter": "both",
        "categories": [
            "Other"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "R57.1",
            "hint": "You may require an immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_489",
        "name": "Idiopathic pulmonary fibrosis",
        "common_name": "Idiopathic pulmonary fibrosis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "J84.1",
            "hint": "You need to see a pulmonologist urgently."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_139",
        "name": "Impacted wisdom tooth",
        "common_name": "Impacted wisdom tooth",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K01.1",
            "hint": "You should see a dentist or an oral and maxillofacial surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_42",
        "name": "Impetigo",
        "common_name": "Impetigo",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L01",
            "hint": "Please see your family doctor or a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_195",
        "name": "Improper use of sleeping pills and sedatives",
        "common_name": "Improper use of sleeping pills and sedatives",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F13.1",
            "hint": "Please consult a toxicologist and/or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_551",
        "name": "Incarcerated inguinal hernia",
        "common_name": "Incarcerated inguinal hernia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K40.0, K40.1, K40.3, K40.4",
            "hint": "You should see a surgeon immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_332",
        "name": "Increased intracranial pressure",
        "common_name": "Increased intracranial pressure",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": null,
            "hint": "See a neurologist immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_36",
        "name": "Infectious arthritis",
        "common_name": "Infectious arthritis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M00",
            "hint": "You will need to see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_200",
        "name": "Infectious mononucleosis",
        "common_name": "Infectious mononucleosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B27",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_206",
        "name": "Infective endocarditis",
        "common_name": "Infective endocarditis",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I33.0",
            "hint": "You need to see a cardiologist or your family doctor urgently!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_33",
        "name": "Influenza",
        "common_name": "Flu",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J09, J10, J11",
            "hint": "See your family doctor, and you may also need to consult an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_836",
        "name": "Ingrown fingernail",
        "common_name": "Ingrown fingernail",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L60.0",
            "hint": "Please make an appointment with a surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_550",
        "name": "Inguinal hernia",
        "common_name": "Inguinal hernia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K40.2, K40.9",
            "hint": "Please see a surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_721",
        "name": "Insomnia",
        "common_name": "Insomnia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F51.0, G47.0",
            "hint": "Please see a family doctor at first or a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_408",
        "name": "Insulinoma",
        "common_name": "Insulinoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "C25.4, D13.7",
            "hint": "Please see your family doctor or an endocrinologist. You may also need to consult a surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_520",
        "name": "Intercostal neuralgia",
        "common_name": "Intercostal neuralgia",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "G58.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_694",
        "name": "Intestinal obstruction and paralytic ileus",
        "common_name": "Intestinal obstruction and paralytic ileus",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K56",
            "hint": "You need medical attention! Ask someone for help and go to the Emergency Department."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_990",
        "name": "Intra-amniotic infection",
        "common_name": "Intra-amniotic infection",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O41",
            "hint": "You should go to obstetrics department as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_556",
        "name": "Invasive mole",
        "common_name": "Invasive mole",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "D39.2",
            "hint": "See a gynecologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_62",
        "name": "Iron deficiency anemia",
        "common_name": "Iron deficiency anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D50, D50.8, D50.9",
            "hint": "See your family doctor or a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_142",
        "name": "Irritable bowel syndrome",
        "common_name": "Irritable bowel syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K58",
            "hint": "You need to see a general practitioner or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_114",
        "name": "Ischemic stroke",
        "common_name": "Ischemic stroke",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I63",
            "hint": "You need to be urgently seen by a doctor! Ask someone nearby to help you or seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1083",
        "name": "Joint pain, unspecified",
        "common_name": "Unspecific joint pain",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "M25.5",
            "hint": "If your symptoms get worse please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_892",
        "name": "Keratitis",
        "common_name": "Keratitis",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H16, H19.1, H19.2, H19.3",
            "hint": "Please see an ophthalmologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_92",
        "name": "Kidney cancer",
        "common_name": "Kidney cancer",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C64",
            "hint": "For a proper diagnosis you should see a nephrologist and an oncologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_420",
        "name": "Klüver-Bucy bitemporal syndrome",
        "common_name": "Klüver-Bucy bitemporal syndrome",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F07.0",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_720",
        "name": "Knee bursitis",
        "common_name": "Knee bursitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M70.4, M70.5",
            "hint": "Please see a family doctor or an orthopedic."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1030",
        "name": "Knee dislocation",
        "common_name": "Dislocated knee",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S83.1",
            "hint": "You should promptly visit a trauma center."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_220",
        "name": "Knee osteoarthritis",
        "common_name": "Knee osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M17",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_347",
        "name": "Korsakoff's syndrome",
        "common_name": "Korsakoff's syndrome",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "F10.6",
            "hint": "Please see your primary care physician or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_982",
        "name": "Labor",
        "common_name": "Labor",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "O80.9",
            "hint": "You should go to your maternity hospital as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_162",
        "name": "Labyrinthitis",
        "common_name": "Inflammation of the inner ear",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H83.0",
            "hint": "You should be examined by an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_727",
        "name": "Lactational mastitis",
        "common_name": "Lactational mastitis",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "O91, O91.1, O91.2",
            "hint": "You should consult your general practitioner."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_735",
        "name": "Lactose intolerance",
        "common_name": "Lactose intolerance",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E73.0, E73.1, E73.8, E73.9",
            "hint": "Please consult with your family doctor or a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_91",
        "name": "Laryngeal cancer",
        "common_name": "Laryngeal cancer",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C32",
            "hint": "You need to see an ENT specialist and an oncologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_123",
        "name": "Laryngitis",
        "common_name": "Laryngitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J04.0, J05.0, J37.0",
            "hint": "If your symptoms are severe or do not resolve after three weeks, consult your family doctor or ENT doctor specialist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_246",
        "name": "Lassa fever",
        "common_name": "Lassa fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A96.2",
            "hint": "Please see an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_553",
        "name": "Lateral medullary syndrome",
        "common_name": "Lateral medullary syndrome",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G46.4, I66.3",
            "hint": "Please, consult a neurologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_211",
        "name": "Left-sided heart failure",
        "common_name": "Left-sided heart failure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I50.1",
            "hint": "You should see a cardiologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_272",
        "name": "Legionellosis",
        "common_name": "Legionellosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A48.1",
            "hint": "Please see a pulmonologist or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_256",
        "name": "Leptospirosis",
        "common_name": "Leptospirosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A27",
            "hint": "See your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_313",
        "name": "Leriche's syndrome",
        "common_name": "Leriche's syndrome",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I74.0",
            "hint": "Please see an internist or vascular specialist (angiologist)."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_950",
        "name": "Lesion of radial nerve",
        "common_name": "Saturday night palsy",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "G56.3",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_841",
        "name": "Leukoplakia",
        "common_name": "Leukoplakia",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K13.2",
            "hint": "See your dentist, please."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1053",
        "name": "Limb injury, unspecified location",
        "common_name": "Limb injury of unspecified location",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": null,
            "hint": "You should promptly report to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_585",
        "name": "Limbic encephalitis",
        "common_name": "Limbic encephalitis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "G04.8, G04.9",
            "hint": "Seek medical treatment right away!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1111",
        "name": "Lip injury",
        "common_name": "Lip injury",
        "sex_filter": "both",
        "categories": [
            "Other"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S00.5, S01.5",
            "hint": "If the wound isn't deep it will likely get better on its own. Otherwise please visit a surgeon promptly."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_99",
        "name": "Liver cancer",
        "common_name": "Liver cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C22",
            "hint": "For a proper diagnosis you need to see a gastroenterologist and an oncologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1059",
        "name": "Lower leg contusion",
        "common_name": "Lower leg contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S80.0, S80.1",
            "hint": "Please try available self care measures, if your symptoms don't subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1038",
        "name": "Lower limb injury, unspecified location",
        "common_name": "Lower limb injury of unspecified location",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "T13.9",
            "hint": "You should promptly report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1022",
        "name": "Lumbar vertebra fracture",
        "common_name": "Broken lumbar spine",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S32.0",
            "hint": "You should promptly visit the nearest trauma center!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_64",
        "name": "Lung cancer",
        "common_name": "Lung cancer",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C34, C78.0",
            "hint": "You must see a pulmonologist or oncologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_182",
        "name": "Lyme disease",
        "common_name": "Lyme disease",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A69.2",
            "hint": "Please see your family doctor or an infectious disease (ID) specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_26",
        "name": "Major depressive disorder",
        "common_name": "Depression",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F32.1, F32.2, F32.8, F32.9, F33.0, F33.1, F33.2, F33.8, F33.9",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1064",
        "name": "Major skin injury",
        "common_name": "Major wound",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S01, S11, S21, S31, S41, S51, S61, S71, S81, S91",
            "hint": "You should promptly report to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_413",
        "name": "Malaria",
        "common_name": "Malaria",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B50, B51, B52, B53, B54",
            "hint": "Consult an infectious disease specialist urgently!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1060",
        "name": "Mandible fracture",
        "common_name": "Broken jaw",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S02.6",
            "hint": "Consult orthopaedist or surgeon as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_274",
        "name": "Manic syndrome",
        "common_name": "Mania",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "F30",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_513",
        "name": "Mastocytosis",
        "common_name": "Mastocytosis",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "Q82.2",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_286",
        "name": "Measles",
        "common_name": "Measles",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "B05",
            "hint": "Please see an infectious disease specialist or your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_981",
        "name": "Mechanical back pain",
        "common_name": "Back strain",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M54, M54.5, M54.6, M54.8, M54.9",
            "hint": "Please consult your General Practitioner if the pain does not go away."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_469",
        "name": "Mediastinitis",
        "common_name": "Inflammation of mediastinum",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "J98.5",
            "hint": "See the nearest doctor as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_620",
        "name": "Medulloblastoma",
        "common_name": "Medulloblastoma",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C71",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_25",
        "name": "Melanoma",
        "common_name": "Melanoma",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C43",
            "hint": "You should be urgently seen by a dermatologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_45",
        "name": "Menopause",
        "common_name": "Menopause",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N95.1",
            "hint": "Consult a gynecologist. You may also need to see an endocrinologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_619",
        "name": "Methanol poisoning",
        "common_name": "Methyl alcohol poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "T51.1",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby to help you."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_510",
        "name": "Microscopic polyangiitis",
        "common_name": "Microscopic artery inflammation",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M31.7",
            "hint": "Please see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_49",
        "name": "Migraine",
        "common_name": "Migraine",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "G43",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_41",
        "name": "Mild cognitive impairment",
        "common_name": "Mild cognitive impairment",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F06.7",
            "hint": "You need to see a psychiatrist or a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_323",
        "name": "Milk-alkali syndrome",
        "common_name": "Milk-alkali syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E83.5",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_984",
        "name": "Minor head injury, unspecified",
        "common_name": "Mild head injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S00, S01",
            "hint": "We recommend seeing your family doctor if you have any worrisome symptoms."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1063",
        "name": "Minor skin injury",
        "common_name": "Minor wound",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S01, S11, S21, S31, S41, S51, S71, S81, S91",
            "hint": "Please try to manage wound on your own. If you don't succeed please report to your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_511",
        "name": "Mixed connective tissue disease",
        "common_name": "Mixed connective tissue disease",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M35.1",
            "hint": "You should consult a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_414",
        "name": "Molar pregnancy",
        "common_name": "Molar pregnancy",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "O01",
            "hint": "You should visit obstetrician-gynecologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_575",
        "name": "Mononeuritis multiplex",
        "common_name": "Inflammation of multiple individual nerves",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G58.7",
            "hint": "You should visit a neurologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_179",
        "name": "Multiple myeloma",
        "common_name": "Cancer of blood plasma cells",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "C90.0",
            "hint": "Please see a hematologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_108",
        "name": "Multiple sclerosis",
        "common_name": "Multiple sclerosis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "G35",
            "hint": "You should consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_192",
        "name": "Mumps",
        "common_name": "Inflammation of parotid salivary glands",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "B26",
            "hint": "You should consult your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_46",
        "name": "Myasthenia gravis",
        "common_name": "Progressive muscle weakness",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G70.0",
            "hint": "You will need to see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_423",
        "name": "Myelofibrosis",
        "common_name": "Replacement of bone marrow with scar tissue",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C94.4",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_140",
        "name": "Myocardial infarction",
        "common_name": "Heart attack",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I21, I22",
            "hint": "You may need immediate medical attention! Ask someone nearby for help and seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_210",
        "name": "Myocarditis",
        "common_name": "Inflammation of heart muscle",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I40",
            "hint": "You should see a cardiologist immediately."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_203",
        "name": "Ménière's disease",
        "common_name": "Ménière's disease",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "H81.0",
            "hint": "Please consult an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_164",
        "name": "Ménétrier's disease",
        "common_name": "Ménétrier's disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K29",
            "hint": "Please see your family doctor or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_979",
        "name": "Nail injury",
        "common_name": "Nail injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S60.1, S90.2",
            "hint": "Try to manage your trauma with self-care measures, if those doesn't help, please visit your GP."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_440",
        "name": "Nasal polyps",
        "common_name": "Nasal polyps",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J33",
            "hint": "Please consult an ENT specialist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_810",
        "name": "Nasal septum deviation",
        "common_name": "Nasal septum deviation",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J34.2",
            "hint": "Please consult with an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_799",
        "name": "Nasolacrimal duct obstruction",
        "common_name": "Blocked tear duct",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H04.5",
            "hint": "You should visit an ophthalmologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_710",
        "name": "Nausea and vomiting in pregnancy",
        "common_name": "Morning sickness",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "O21.2, O21.8, O21.9",
            "hint": "You should consult your obstetrician/gynecologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_37",
        "name": "Nephrolithiasis",
        "common_name": "Kidney stones",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N20, N20.0, N20.1, N20.2, N23",
            "hint": "It would be a good idea to consult a general practitioner or a nephrologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_265",
        "name": "Nephrotic syndrome",
        "common_name": "Nephrotic syndrome",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "N04",
            "hint": "Please see an internist or a nephrologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_375",
        "name": "Neurasthenia",
        "common_name": "Neurasthenia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "F48.0",
            "hint": "Please consult a family doctor or a psychologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_63",
        "name": "Nicotine dependence",
        "common_name": "Nicotine dependence",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F17",
            "hint": "Please see your family doctor, an internist or a psychologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_583",
        "name": "Non-Hodgkin lymphoma",
        "common_name": "Non-Hodgkin lymphoma",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C82, C83, C84, C85, C86, C88, C90, C91",
            "hint": "Please see a hematologist and an oncologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_801",
        "name": "Non-lactational mastitis",
        "common_name": "Inflammation of the breast",
        "sex_filter": "female",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N61",
            "hint": "You should consult  your gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_797",
        "name": "Non-melanoma skin cancer",
        "common_name": "Non-melanoma skin carcinoma",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C44",
            "hint": "Make an appointment with a specialist.You should be seen by a dermatologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_709",
        "name": "Non-traumatic intracerebral hemorrhage",
        "common_name": "Non-traumatic bleeding within the skull",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I61",
            "hint": "You need to be seen by a doctor immediately! Ask someone nearby to help you and seek emergency care."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_644",
        "name": "Nonalcoholic fatty liver disease",
        "common_name": "Nonalcoholic fatty liver disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K76.0",
            "hint": "Please consult a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_666",
        "name": "Nonallergic noninfectious rhinitis",
        "common_name": "Nonallergic noninfectious rhinitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "J30.0",
            "hint": "Please consult your family doctor or an ENT specialist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_780",
        "name": "Nose injury",
        "common_name": "Broken nose",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S00.3, S01.2, S02.2, S03.1",
            "hint": "Please visit a trauma surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_118",
        "name": "Obsessive-compulsive disorder",
        "common_name": "Obsessive-compulsive disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F42",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_248",
        "name": "Obstructive jaundice",
        "common_name": "Obstructive jaundice",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "K83.1",
            "hint": "Please consult your family doctor, an internist or a gastroenterologist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_711",
        "name": "Obstructive sleep apnea",
        "common_name": "Obstructive sleep apnea",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G47.3",
            "hint": "You should consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_549",
        "name": "Oculomotor nerve palsy",
        "common_name": "Oculomotor nerve palsy",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H49.0",
            "hint": "Please see an ophthalmologist or a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_937",
        "name": "Olecranon bursitis",
        "common_name": "Olecranon bursitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M70.2",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_888",
        "name": "Onychomycosis",
        "common_name": "Fungal nail infection",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B35.1",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_997",
        "name": "Open-angle glaucoma",
        "common_name": "Open-angle glaucoma",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H40.1",
            "hint": "You need to be evaluated by an ophthalmologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_698",
        "name": "Oral candidiasis",
        "common_name": "Oral thrush",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B37.0",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_67",
        "name": "Oral herpes",
        "common_name": "Cold sore",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "B00.1, B00.9",
            "hint": "Please see your family doctor or a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_125",
        "name": "Orchitis and epididymitis",
        "common_name": "Inflammation of testes and epididymis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N45",
            "hint": "Please make an appointment with a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_350",
        "name": "Organic mental disorder",
        "common_name": "Organic mental disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "F06",
            "hint": "Please see a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_337",
        "name": "Osteomalacia",
        "common_name": "Osteomalacia",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M83",
            "hint": "Please see your family doctor or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_533",
        "name": "Osteomyelitis",
        "common_name": "Bone infection",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "M86",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_69",
        "name": "Osteoporosis",
        "common_name": "Osteoporosis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "M81",
            "hint": "Please see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_131",
        "name": "Otitis externa",
        "common_name": "Inflammation of the external ear",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H60, H62.0, H62.1, H62.2, H62.3, H62.4",
            "hint": "You should be examined by your family doctor or an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_89",
        "name": "Ovarian cancer",
        "common_name": "Ovarian cancer",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C56",
            "hint": "For a proper diagnosis you should see a gynecologist, and you may also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_321",
        "name": "Paget's disease of bone",
        "common_name": "Paget's disease of bone",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M88",
            "hint": "Please consult a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_923",
        "name": "Painful ovulation",
        "common_name": "Painful ovulation",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "N94.0",
            "hint": "Consult a doctor in case of strong  or persistent pain."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_617",
        "name": "Pancoast tumor",
        "common_name": "Pancoast tumor",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "C34.1",
            "hint": "Please consult a thoracic surgeon and a neurologist promptly."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_98",
        "name": "Pancreatic cancer",
        "common_name": "Pancreatic cancer",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C25",
            "hint": "For a proper diagnosis you need to see a gastroenterologist and an oncologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_310",
        "name": "Paranoid schizophrenia",
        "common_name": "Paranoid schizophrenia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F20.0",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1106",
        "name": "Paraphimosis",
        "common_name": "Paraphimosis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "N47",
            "hint": "Try to gently pull the foreskin back over the glans penis. If you can't, please report promptly to the nearest hospital."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_19",
        "name": "Parkinson's disease",
        "common_name": "Parkinson's disease",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G20",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_529",
        "name": "Paronychia",
        "common_name": "Paronychia",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "L03.0",
            "hint": "See a surgeon or a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_445",
        "name": "Paroxysmal nocturnal hemoglobinuria",
        "common_name": "Paroxysmal nocturnal hemoglobinuria",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D59.5",
            "hint": "You should consult a hematologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1013",
        "name": "Patella fracture",
        "common_name": "Broken kneecap",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S82.0",
            "hint": "Consult orthopaedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_939",
        "name": "Patellofemoral pain syndrome",
        "common_name": "Runner's knee",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M22.2",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_633",
        "name": "Pediculosis capitis",
        "common_name": "Head lice",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B85.0",
            "hint": "Please consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1020",
        "name": "Pelvis fracture",
        "common_name": "Broken pelvis",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S32.1, S32.2, S32.3, S32.4, S32.5, S32.8",
            "hint": "You should report to a trauma unit immediately. Call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1096",
        "name": "Penetrating abdominal trauma",
        "common_name": "Penetrating stomach trauma",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S39, S39.0, S39.6, S39.7, S39.8",
            "hint": "Call an ambulance immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_20",
        "name": "Peptic ulcer",
        "common_name": "Peptic ulcer disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "K25, K26, K27, K28",
            "hint": "Please see your family doctor or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_126",
        "name": "Pericarditis",
        "common_name": "Pericarditis",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I30",
            "hint": "Consult a cardiologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_772",
        "name": "Perimenopause",
        "common_name": "Perimenopause",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N95.9",
            "hint": "Please see a gynecologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_75",
        "name": "Periodontitis",
        "common_name": "Gum disease",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K05.3",
            "hint": "You need to see a dentist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_957",
        "name": "Periorbital cellulitis",
        "common_name": "Periorbital cellulitis",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H05.0, L03.2",
            "hint": "Consult your ophthalmologist or primary care doctor. If your symptoms worsen, seek an immediate ophthalmologist's care."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_85",
        "name": "Peripheral vascular disease",
        "common_name": "Peripheral arterial disease",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "I73.9",
            "hint": "Please see a vascular surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_660",
        "name": "Peritonitis",
        "common_name": "Peritonitis",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "K65.0",
            "hint": "See a doctor immediately or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_686",
        "name": "Peritonsillar abscess",
        "common_name": "Peritonsillar abscess",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "J36",
            "hint": "Please visit an otolaryngologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_324",
        "name": "Pernicious anemia",
        "common_name": "Pernicious anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D51.0",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_949",
        "name": "Peroneal mononeuropathy",
        "common_name": "Peroneal neuropathy",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G57.3",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_724",
        "name": "Pertussis",
        "common_name": "Pertussis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A37",
            "hint": "Please visit an infectious disease specialist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_295",
        "name": "Pesticide poisoning",
        "common_name": "Pesticide poisoning",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T60, X48, X68, X87, Y18",
            "hint": "You may need immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_207",
        "name": "Pheochromocytoma",
        "common_name": "Pheochromocytoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "C74.1, D35.0",
            "hint": "Please consult an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1107",
        "name": "Phimosis",
        "common_name": "Phimosis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N47",
            "hint": "You should see a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1065",
        "name": "Physical injury of unknown location",
        "common_name": "Physical injury of unknown location",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T14.8, T14.9",
            "hint": "You should promptly report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_543",
        "name": "Pituitary prolactin releasing adenoma",
        "common_name": "Pituitary prolactin releasing adenoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D35.2, E22.1",
            "hint": "You should visit an endocrinologist or oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_334",
        "name": "Pituitary tumor",
        "common_name": "Pituitary tumor",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C75.1, D35.2, D44.3",
            "hint": "Please consult an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_924",
        "name": "Placenta previa",
        "common_name": "Placenta previa",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O44",
            "hint": "Please see a gynaecologist as soon as possible. If symptoms are intensive please call for help!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_989",
        "name": "Placental abruption",
        "common_name": "Premature separation of placenta",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O45",
            "hint": "You should go to hospital as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_271",
        "name": "Plague",
        "common_name": "Plague",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A20",
            "hint": "Please see an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_798",
        "name": "Pneumocystis jiroveci pneumonia",
        "common_name": "Pneumocystis jiroveci pneumonia",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "B59",
            "hint": "You require immediate medical attention! You should consult your family doctor or a pulmonologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_127",
        "name": "Pneumonia",
        "common_name": "Pneumonia",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "J12, J13, J14, J15, J16, J17, J18",
            "hint": "See your family doctor as soon as possible. You may also need to consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_661",
        "name": "Pneumothorax",
        "common_name": "Pneumothorax",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "J93, S27.0",
            "hint": "See a doctor immediately or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_458",
        "name": "Polyarteritis nodosa",
        "common_name": "Polyarteritis nodosa",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "M30.0",
            "hint": "Please see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_145",
        "name": "Polycystic ovary syndrome",
        "common_name": "Polycystic ovary syndrome",
        "sex_filter": "female",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E28.2",
            "hint": "You should consult a gynecologist and an endocrinologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_251",
        "name": "Polycythemia vera",
        "common_name": "Erythremia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D45",
            "hint": "You should see a hematologist immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_317",
        "name": "Polymyositis",
        "common_name": "Polymyositis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "M33.2",
            "hint": "Please see a rheumatologist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_695",
        "name": "Portal hypertension",
        "common_name": "Portal hypertension",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K76.6",
            "hint": "You should consult your family doctor or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_299",
        "name": "Post-traumatic stress disorder",
        "common_name": "Post-traumatic stress disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F43.1",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_351",
        "name": "Postconcussional syndrome",
        "common_name": "Postconcussional syndrome",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "F07.2",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_309",
        "name": "Postpartum depression",
        "common_name": "Post-pregnancy depression",
        "sex_filter": "female",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F53.0",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_369",
        "name": "Pre-eclampsia",
        "common_name": "Pre-eclampsia",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "O14",
            "hint": "Please see gynecologist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_22",
        "name": "Pregnancy",
        "common_name": "Pregnancy",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "Z32.1",
            "hint": "It sounds as if you might be pregnant. You should see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_143",
        "name": "Premenstrual syndrome",
        "common_name": "Premenstrual syndrome",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "N94.3",
            "hint": "You will need to see a gynecologist and an endocrinologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_508",
        "name": "Prerenal acute renal failure",
        "common_name": "Prerenal acute renal failure",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "N17.8, N17.9",
            "hint": "Visit nephrologist or family doctor immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_681",
        "name": "Presbycusis",
        "common_name": "Age-related hearing loss",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "H91.1",
            "hint": "Please consult an otolaryngologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_486",
        "name": "Primary biliary cholangitis",
        "common_name": "Primary biliary cholangitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "K74.3",
            "hint": "Please consult a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_775",
        "name": "Primary syphilis",
        "common_name": "Primary syphilis",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A51.0, A51.1, A51.2, A51.5, A51.9",
            "hint": "You should visit a dermatovenerologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_497",
        "name": "Prinzmetal's angina",
        "common_name": "Prinzmetal's angina",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I20.1",
            "hint": "Please see a cardiologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_728",
        "name": "Proctitis",
        "common_name": "Proctitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K51.2, K62.7, K62.8",
            "hint": "Please see your family doctor or a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_397",
        "name": "Progressive supranuclear palsy",
        "common_name": "Progressive supranuclear palsy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G23.1",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_335",
        "name": "Prostate cancer",
        "common_name": "Prostate cancer",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C61",
            "hint": "See a urologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_122",
        "name": "Prostatitis",
        "common_name": "Prostatitis",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N41.0",
            "hint": "Please consult a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_571",
        "name": "Pseudo-Tetany",
        "common_name": "Pseudo-Tetany",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "R06.4",
            "hint": "Please visit your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_390",
        "name": "Pseudobulbar palsy",
        "common_name": "Pseudobulbar palsy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "G12.2",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_587",
        "name": "Pseudogout",
        "common_name": "Pseudogout",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "M11",
            "hint": "We recommend you see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_444",
        "name": "Pseudomembranous colitis",
        "common_name": "Pseudomembranous colitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A04.7",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_263",
        "name": "Psittacosis",
        "common_name": "Psittacosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A70",
            "hint": "Consult your family doctor or an infectious disease specialist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_43",
        "name": "Psoriasis",
        "common_name": "Psoriasis",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "L40",
            "hint": "Please make an appointment with a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1100",
        "name": "Psoriasis exacerbation",
        "common_name": "Psoriasis exacerbation",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "L40, L40.0, L40.1, L40.2, L40.4, L40.9",
            "hint": "Please make an appointment with a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_953",
        "name": "Psoriatic arthritis",
        "common_name": "Psoriatic arthritis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L40.5",
            "hint": "Please consult a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_288",
        "name": "Pulmonary edema",
        "common_name": "Pulmonary edema",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "J81",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby for help or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_136",
        "name": "Pulmonary embolism",
        "common_name": "Pulmonary embolism",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I26",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby to help you."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_493",
        "name": "Pulmonary hypertension",
        "common_name": "Pulmonary hypertension",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I27.0, I27.2",
            "hint": "Please consult a cardiologist or a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_32",
        "name": "Pulmonary tuberculosis",
        "common_name": "Pulmonary tuberculosis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "A15, A16",
            "hint": "You should consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_124",
        "name": "Pulpitis",
        "common_name": "Pulpitis",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "K04.0",
            "hint": "It would be a good idea to see a dentist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_540",
        "name": "Pure hypercholesterolemia",
        "common_name": "Pure hypercholesterolemia",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E78.0",
            "hint": "Please consult your family doctor or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_541",
        "name": "Pure hypertriglyceridemia",
        "common_name": "Pure hypertriglyceridemia",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E78.1",
            "hint": "Please consult your family doctor or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_284",
        "name": "Pyelonephritis",
        "common_name": "Pyelonephritis",
        "sex_filter": "both",
        "categories": [
            "Nephrology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "N10, N11, N12",
            "hint": "Consultation with family doctor, urologist, or nephrologist is recommended."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_241",
        "name": "Q fever",
        "common_name": "Q fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A78",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_579",
        "name": "Rabies",
        "common_name": "Rabies",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A82",
            "hint": "Seek emergency medical treatment immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_468",
        "name": "Ramsay Hunt syndrome type II",
        "common_name": "Ramsay Hunt syndrome type II",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B02.2",
            "hint": "Please consult an otolaryngologist or family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_209",
        "name": "Raynaud's phenomenon",
        "common_name": "Raynaud's phenomenon",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "I73.0",
            "hint": "You should see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_100",
        "name": "Reactive arthritis",
        "common_name": "Reactive arthritis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M02",
            "hint": "You should make an appointment with a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_980",
        "name": "Reflex syncope",
        "common_name": "Reflex syncope",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "R55",
            "hint": "Please consult with your family doctor or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_237",
        "name": "Relapsing fever",
        "common_name": "Relapsing fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A68",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_687",
        "name": "Respiratory diphtheria",
        "common_name": "Respiratory diphtheria",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A36.0, A36.1, A36.2, A36.9",
            "hint": "Please, consult an infectious disease specialist immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_362",
        "name": "Respiratory failure",
        "common_name": "Respiratory failure",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "J96",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby for help or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_596",
        "name": "Retinal detachment",
        "common_name": "Retinal detachment",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "H33",
            "hint": "You should visit an ophthalmologist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_593",
        "name": "Retinopathy",
        "common_name": "Retinopathy",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H35.2, H36",
            "hint": "Please see an ophthalmologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_104",
        "name": "Rheumatoid arthritis",
        "common_name": "Rheumatoid arthritis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M05",
            "hint": "You will need to see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_889",
        "name": "Rib fracture",
        "common_name": "Broken rib",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S22.3",
            "hint": "You may require immediate medical attention. Seek emergency care."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_252",
        "name": "Rift Valley fever",
        "common_name": "Rift Valley fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A92.4",
            "hint": "Please see an infectious disease specialist immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_572",
        "name": "Right-sided heart failure",
        "common_name": "Right-sided heart failure",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I50.0",
            "hint": "You should see a cardiologist as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_239",
        "name": "Rocky Mountain spotted fever",
        "common_name": "Rocky Mountain spotted fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A77.0",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_849",
        "name": "Rosacea",
        "common_name": "Rosacea",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "L71.9",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_931",
        "name": "Rotator cuff syndrome",
        "common_name": "Rotator cuff syndrome",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M75.1",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_326",
        "name": "Rotor syndrome",
        "common_name": "Rotor syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "E80.6",
            "hint": "Please see your family doctor or a gastroenterologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_189",
        "name": "Rubella",
        "common_name": "Rubella",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "B06",
            "hint": "Please see your primary care physician."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_738",
        "name": "Ruptured eardrum",
        "common_name": "Ruptured eardrum",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "H72",
            "hint": "You should make an appointment with otolaryngologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_307",
        "name": "Salicylate poisoning",
        "common_name": "Salicylate toxicity",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "T39.0, T49.0, T49.4",
            "hint": "You may need immediate medical attention! Ask someone nearby for help."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_105",
        "name": "Sarcoidosis",
        "common_name": "Sarcoidosis",
        "sex_filter": "both",
        "categories": [
            "Pulmonology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D86",
            "hint": "You should consult a pulmonologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_589",
        "name": "Scabies",
        "common_name": "Scabies",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B86",
            "hint": "Please see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1021",
        "name": "Scapula fracture",
        "common_name": "Broken shoulder bone",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S42.1",
            "hint": "Consult an orthopaedist or report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_676",
        "name": "Scarlet fever",
        "common_name": "Scarlet fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A38",
            "hint": "See an infectious disease specialist or your family doctor!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_311",
        "name": "Schizoaffective disorder - depressive type",
        "common_name": "Schizoaffective disorder - depressive type",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F25.1",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_312",
        "name": "Schizoaffective disorder - manic type",
        "common_name": "Schizoaffective disorder - manic type",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "F25.0",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_102",
        "name": "Sciatica",
        "common_name": "Sciatica",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M54.3, M54.4",
            "hint": "You should be seen by your family doctor or a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_675",
        "name": "Scoliosis",
        "common_name": "Scoliosis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M41, M41.9, M96.5",
            "hint": "You should consult your family doctor or a orthopedic surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_257",
        "name": "Scrub typhus",
        "common_name": "Scrub typhus",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A75.3",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_320",
        "name": "Seasonal affective disorder",
        "common_name": "Seasonal affective disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "F33",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_453",
        "name": "Seborrheic dermatitis",
        "common_name": "Seborrheic dermatitis",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L21",
            "hint": "You should see a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_766",
        "name": "Secondary syphilis",
        "common_name": "Secondary syphilis",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A51.3",
            "hint": "You should visit a dermatovenerologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_645",
        "name": "Sepsis",
        "common_name": "Sepsis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A41.9",
            "hint": "Seek medical attention immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_106",
        "name": "Sexual addiction",
        "common_name": "Sexual addiction",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "F52.7",
            "hint": "Please see a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_521",
        "name": "Shigellosis",
        "common_name": "Shigellosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A03",
            "hint": "Please see an infectious disease specialist immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_78",
        "name": "Shingles",
        "common_name": "Shingles",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "B02",
            "hint": "It would be a good idea to see your family doctor or a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_932",
        "name": "Shoulder bursitis",
        "common_name": "Shoulder bursitis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M75.5",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1037",
        "name": "Shoulder contusion",
        "common_name": "Shoulder contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S40.0",
            "hint": "Please try available self care measures, if your symptoms don't subside in 24-48 hours, please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1028",
        "name": "Shoulder dislocation",
        "common_name": "Dislocated shoulder",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S43.0",
            "hint": "You should go to a trauma center immediately."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_948",
        "name": "Shoulder impingement syndrome",
        "common_name": "Shoulder impingement syndrome",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M75.4",
            "hint": "Please consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_588",
        "name": "Sickle cell anemia",
        "common_name": "Sickle cell anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D57",
            "hint": "Please visit your family doctor or a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_144",
        "name": "Sjögren's syndrome",
        "common_name": "Sjögren's syndrome",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M35.0",
            "hint": "Please see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_466",
        "name": "Small intestinal bacterial overgrowth",
        "common_name": "Small intestinal bacterial overgrowth",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K90.8",
            "hint": "Please consult a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_308",
        "name": "Social anxiety disorder",
        "common_name": "Social anxiety disorder",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "F40.1",
            "hint": "Please consult a psychiatrist or a psychologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_370",
        "name": "Specific phobia",
        "common_name": "Specific phobia",
        "sex_filter": "both",
        "categories": [
            "Psychiatry"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "F40.2",
            "hint": "Please consult a psychiatrist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_218",
        "name": "Spinal osteoarthritis",
        "common_name": "Spinal osteoarthritis",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "M47",
            "hint": "Please consult an orthopedist or a rheumatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_755",
        "name": "Splenic injury",
        "common_name": "Splenic injury",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S36.0",
            "hint": "Call an ambulance immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_689",
        "name": "Sprained ankle",
        "common_name": "Sprained ankle",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S93.4",
            "hint": "You should visit an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_817",
        "name": "Sprained elbow",
        "common_name": "Sprained elbow",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S53.4",
            "hint": "Please visit an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1034",
        "name": "Sprained finger",
        "common_name": "Sprained finger",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S63.6",
            "hint": "Please visit an orthopedist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_828",
        "name": "Sprained hip",
        "common_name": "Sprained hip",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "S73.1",
            "hint": "Please see a traumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_829",
        "name": "Sprained knee",
        "common_name": "Sprained knee",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "S83.4, S83.5, S83.6",
            "hint": "Please see an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_830",
        "name": "Sprained shoulder",
        "common_name": "Sprained shoulder",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "S43.4",
            "hint": "Please see a traumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_818",
        "name": "Sprained wrist",
        "common_name": "Sprained wrist",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S63.5",
            "hint": "Please visit an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_663",
        "name": "Stable angina pectoris",
        "common_name": "Stable angina pectoris",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "I20.8",
            "hint": "See a cardiologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_116",
        "name": "Stress incontinence",
        "common_name": "Stress incontinence",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "N39.3",
            "hint": "If your symptoms get worse, consult a urologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_170",
        "name": "Stye",
        "common_name": "Stye",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H00.0",
            "hint": "If your symptoms get worse, please visit your family doctor or an ophthalmologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_685",
        "name": "Subarachnoid hemorrhage",
        "common_name": "Subarachnoid hemorrhage",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I60",
            "hint": "You require immediate medical assistance. Call an ambulance."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_673",
        "name": "Sudden sensorineural hearing loss",
        "common_name": "Sudden sensorineural hearing loss",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H90.3, H90.4",
            "hint": "Visit an otolaryngologist or family doctor immediately! Early presentation to a physician and early institution of treatment improves the prognosis for hearing recovery."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_819",
        "name": "Sun allergy",
        "common_name": "Sun allergy",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "L56.3, L56.4, L56.8, L56.9",
            "hint": "For severe or persistent symptoms, you may need to see a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_962",
        "name": "Sunburn",
        "common_name": "Sunburn",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "L55",
            "hint": "Please use anti burn ointments. If that doesn't help, consult your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_135",
        "name": "Superficial thrombophlebitis",
        "common_name": "Inflammation of the superficial veins",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "I80.0",
            "hint": "You need to consult a vascular surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_616",
        "name": "Superior vena cava syndrome",
        "common_name": "Superior vena cava syndrome",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I87.1",
            "hint": "Please seek medical attention right away."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_970",
        "name": "Suspicious mole",
        "common_name": "Suspicious mole",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D22, D22.1, D22.2, D22.3, D22.4, D22.5, D22.6, D22.7, D22.9",
            "hint": "You should contact a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_505",
        "name": "Syndrome of inappropriate antidiuretic hormone secretion",
        "common_name": "Syndrome of inappropriate antidiuretic hormone secretion",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E22.2",
            "hint": "Please consult an endocrinologist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_109",
        "name": "Systemic lupus erythematosus",
        "common_name": "Systemic lupus erythematosus",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M32",
            "hint": "Please see a rheumatologist and a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_112",
        "name": "Systemic scleroderma",
        "common_name": "Systemic scleroderma",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "M34",
            "hint": "You need to see a rheumatologist and a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_437",
        "name": "Taeniasis",
        "common_name": "Tapeworm infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "B68",
            "hint": "You should visit an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_452",
        "name": "Takayasu's disease",
        "common_name": "Takayasu's disease",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M31.4",
            "hint": "Please see a rheumatologist, a cardiologist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_459",
        "name": "Temporal giant cell arteritis",
        "common_name": "Temporal giant cell arteritis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "M31.6",
            "hint": "You should see a neurologist!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_152",
        "name": "Temporomandibular joint disorders",
        "common_name": "Temporomandibular joint disorders",
        "sex_filter": "both",
        "categories": [
            "Dentistry"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "K07.6",
            "hint": "Please see a dentist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_55",
        "name": "Tension-type headaches",
        "common_name": "Stress headache",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "common",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "G44.2",
            "hint": "You had better consult a general practitioner or a neurologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_774",
        "name": "Tertiary syphilis",
        "common_name": "Tertiary syphilis",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "A52.9",
            "hint": "You should visit a venereologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_519",
        "name": "Testicular cancer",
        "common_name": "Testicular cancer",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C62",
            "hint": "Please consult a urologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_523",
        "name": "Testicular torsion",
        "common_name": "Testicular torsion",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "N44",
            "hint": "See a surgeon or urologist as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_255",
        "name": "Tetanus",
        "common_name": "Tetanus",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A35",
            "hint": "Please see a doctor immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_208",
        "name": "Tetany",
        "common_name": "Tetany",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "R29.0",
            "hint": "You should see your family doctor."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1094",
        "name": "Thalassemia",
        "common_name": "Thalassemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D56",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1048",
        "name": "Thigh contusion",
        "common_name": "Thigh contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S70.1",
            "hint": "Please try available self care measures, if your symptoms don't subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_890",
        "name": "Third-degree atrioventricular block",
        "common_name": "Third-degree atrioventricular block",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I44.2",
            "hint": "You should consult a cardiologist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_765",
        "name": "Thoracic aortic aneurysm",
        "common_name": "Thoracic aortic aneurysm",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "I71.2",
            "hint": "Please see your family doctor and a surgeon for medical monitoring of your condition."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_884",
        "name": "Thoracic aortic dissection",
        "common_name": "Thoracic aortic dissection",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I71.0",
            "hint": "You may require immediate medical assistance, call for emergency services."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_618",
        "name": "Thoracic outlet syndrome",
        "common_name": "Thoracic outlet syndrome",
        "sex_filter": "both",
        "categories": [
            "Angiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G54.0",
            "hint": "Please see a neurologist or an angiologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1023",
        "name": "Thoracic vertebra fracture",
        "common_name": "Broken thoracic spine",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "S22.0, S22.1",
            "hint": "You should promptly visit the nearest trauma center!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1061",
        "name": "Thorax contusion",
        "common_name": "Chest contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S20.2",
            "hint": "Please try available self care measures, if your symptoms do not subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_925",
        "name": "Threatened miscarriage",
        "common_name": "Threatened miscarriage",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "O20.0",
            "hint": "Please visit a gynaecologist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_392",
        "name": "Thrombocytopathy",
        "common_name": "Thrombocytopathy",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D69.1",
            "hint": "Please see a hematologist or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_597",
        "name": "Thrombotic thrombocytopenic purpura",
        "common_name": "Thrombotic thrombocytopenic purpura",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "M31.1",
            "hint": "You need to see a doctor as soon as possible! Ask someone nearby to help you."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_97",
        "name": "Thyroid cancer",
        "common_name": "Thyroid cancer",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C73",
            "hint": "For a proper diagnosis you should see an endocrinologist. You will also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_429",
        "name": "Thyrotoxic crisis with thyrotoxicosis",
        "common_name": "Thyrotoxic crisis with thyrotoxicosis",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "E05.5",
            "hint": "Seek emergency care immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_546",
        "name": "Thyrotropin releasing pituitary adenoma",
        "common_name": "Thyrotropin releasing pituitary adenoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "D35.2, E05.8",
            "hint": "You should visit an endocrinologist or oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1014",
        "name": "Tibiofibular fracture",
        "common_name": "Broken calf bones",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S82.1, S82.2, S82.3, S82.4",
            "hint": "Consult orthopaedist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_835",
        "name": "Tinea capitis",
        "common_name": "Fungal infection of the scalp, ringworm of the scalp",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B35.0",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_857",
        "name": "Tinea pedis",
        "common_name": "Athlete's foot",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B35.3",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_786",
        "name": "Tinea versicolor",
        "common_name": "Tinea versicolor",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "B36.0",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1045",
        "name": "Toe contusion",
        "common_name": "Toe contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S90.1",
            "hint": "Please try available self care measures, if your symptoms don't get better in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1032",
        "name": "Toe dislocation",
        "common_name": "Toe dislocation",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S93.1",
            "hint": "You should promptly visit a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1062",
        "name": "Toe fracture",
        "common_name": "Broken toe",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S92.5",
            "hint": "Consult orthopaedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_436",
        "name": "Toxocariasis",
        "common_name": "Toxocariasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B83.0",
            "hint": "Please see an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_729",
        "name": "Toxoplasmosis",
        "common_name": "Toxoplasmosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B58",
            "hint": "Please visit an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_378",
        "name": "Transient ischemic attack",
        "common_name": "Transient ischemic attack",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G45",
            "hint": "Please see a neurologist."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_433",
        "name": "Trichinosis",
        "common_name": "Trichinosis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "B75",
            "hint": "Please consult an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_103",
        "name": "Trichomoniasis",
        "common_name": "Trichomoniasis",
        "sex_filter": "both",
        "categories": [
            "Venereology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A59",
            "hint": "Please see your family doctor or a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_438",
        "name": "Trichuriasis",
        "common_name": "Whipworm infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "B79",
            "hint": "Please consult an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_473",
        "name": "Trigeminal nerve damage",
        "common_name": "Trigeminal nerve damage",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "G50.9, S04.3",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_150",
        "name": "Trigeminal neuralgia",
        "common_name": "Trigeminal neuralgia",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "G50.0",
            "hint": "You need to contact a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_548",
        "name": "Trochlear nerve palsy",
        "common_name": "Trochlear nerve palsy",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "H49.1",
            "hint": "Please see an ophthalmologist or a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1052",
        "name": "Trunk injury, unspecified location",
        "common_name": "Trunk injury of unspecified location",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "T09.9",
            "hint": "You should promptly report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_236",
        "name": "Tularemia",
        "common_name": "Tularemia",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A21",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_330",
        "name": "Tumor lysis syndrome",
        "common_name": "Tumor lysis syndrome",
        "sex_filter": "both",
        "categories": [
            "Oncology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "E88.3",
            "hint": "See an oncologist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_202",
        "name": "Type 1 Neurofibromatosis",
        "common_name": "Type 1 Neurofibromatosis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "Q85.0",
            "hint": "Please make an appointment with a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_574",
        "name": "Type 2 Neurofibromatosis",
        "common_name": "Type 2 Neurofibromatosis",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "Q85.0",
            "hint": "Please visit a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_234",
        "name": "Typhoid fever",
        "common_name": "Typhoid fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A01.0",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_238",
        "name": "Typhus",
        "common_name": "Typhus",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A77.9",
            "hint": "Please see your family doctor or an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_23",
        "name": "Ulcerative colitis",
        "common_name": "Ulcerative colitis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "K51",
            "hint": "You should see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_946",
        "name": "Ulnar nerve syndrome",
        "common_name": "Ulnar nerve syndrome",
        "sex_filter": "both",
        "categories": [
            "Orthopedics"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G56.2",
            "hint": "You should consult an orthopedist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_664",
        "name": "Unstable angina pectoris",
        "common_name": "Unstable angina pectoris",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "I20.0",
            "hint": "See a cardiologist urgently or call an ambulance!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_1036",
        "name": "Upper limb injury, unspecified location",
        "common_name": "Upper limb injury of unspecified location",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "T11.9",
            "hint": "You should promptly report to the nearest trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_292",
        "name": "Urethritis",
        "common_name": "Urethritis",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "N34.1, N34.2, N34.3, N37.0",
            "hint": "Please consult your family doctor or a urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_54",
        "name": "Urge incontinence",
        "common_name": "Urge incontinence",
        "sex_filter": "both",
        "categories": [
            "Urology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic_with_exacerbations",
        "severity": "mild",
        "extras": {
            "icd10_code": "N39.4",
            "hint": "If your symptoms get worse, consult a urologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_47",
        "name": "Uterine fibroids",
        "common_name": "Uterine fibroids",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "D25",
            "hint": "It would be a good idea to see a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_216",
        "name": "Uveitis",
        "common_name": "Uveitis",
        "sex_filter": "both",
        "categories": [
            "Ophthalmology"
        ],
        "prevalence": "rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H20, H30",
            "hint": "Please consult an ophthalmologist or a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_480",
        "name": "VIPoma",
        "common_name": "VIPoma",
        "sex_filter": "both",
        "categories": [
            "Endocrinology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "C25.4, E16.8",
            "hint": "You should visit an oncologist as soon as possible!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_554",
        "name": "Vagus nerve palsy",
        "common_name": "Vagus nerve palsy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "G52.2",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_767",
        "name": "Varicocele",
        "common_name": "Varicocele",
        "sex_filter": "male",
        "categories": [
            "Urology"
        ],
        "prevalence": "moderate",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "I86.1",
            "hint": "You should make an appointment with urologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_684",
        "name": "Varicose veins of lower extremities",
        "common_name": "Varicose veins of lower extremities",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "I83",
            "hint": "You should consult your family doctor and surgeon."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_391",
        "name": "Vascular hemorrhagic diathesis",
        "common_name": "Vascular hemorrhagic diathesis",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute_potentially_chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D69.9",
            "hint": "Please see a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_316",
        "name": "Vasculitis",
        "common_name": "Vasculitis",
        "sex_filter": "both",
        "categories": [
            "Rheumatology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "I77.6",
            "hint": "Please see a rheumatologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_384",
        "name": "Vertebrobasilar insufficiency",
        "common_name": "Vertebrobasilar insufficiency",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "G45.0",
            "hint": "Please see a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_599",
        "name": "Vestibular neuronitis",
        "common_name": "Vestibular neuronitis",
        "sex_filter": "both",
        "categories": [
            "Laryngology/ENT"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H81.2",
            "hint": "You should visit an ENT specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_470",
        "name": "Vestibulocochlear nerve damage",
        "common_name": "Vestibulocochlear nerve damage",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "H93.3, S04.6",
            "hint": "Please consult a neurologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1076",
        "name": "Viral gastroenteritis",
        "common_name": "Viral gastroenteritis",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A08, A08.4, A09, K52.8, K52.9",
            "hint": "You should see a family doctor if the symptoms persist for more than three days."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_562",
        "name": "Viral meningitis",
        "common_name": "Viral meningitis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A87, B00.3, B02.1, B26.1, G02.0",
            "hint": "Please see a neurologist as soon as possible."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_214",
        "name": "Visceral leishmaniasis",
        "common_name": "Visceral leishmaniasis",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "severe",
        "extras": {
            "icd10_code": "B55.0",
            "hint": "You should see an infectious disease specialist immediately!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_61",
        "name": "Vitamin B12 deficiency anemia",
        "common_name": "Vitamin B12 deficiency anemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D51",
            "hint": "See your family doctor or a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_966",
        "name": "Vomiting, unspecified",
        "common_name": "Unspecific vomiting",
        "sex_filter": "both",
        "categories": [
            "Internal Medicine"
        ],
        "prevalence": "common",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "R11",
            "hint": "Please, contact your family doctor if your symptoms don't get better in one day."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_388",
        "name": "Von Willebrand disease",
        "common_name": "Von Willebrand disease",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "rare",
        "acuteness": "chronic",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D68.0",
            "hint": "Please see a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_95",
        "name": "Vulvar cancer",
        "common_name": "Vulvar cancer",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C51",
            "hint": "For a proper diagnosis you must see a gynecologist. You will also need to consult an oncologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_732",
        "name": "Vulvovaginal candidiasis",
        "common_name": "Vulvovaginal candidiasis",
        "sex_filter": "female",
        "categories": [
            "Gynecology"
        ],
        "prevalence": "moderate",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B37.3",
            "hint": "Please consult your family doctor or a gynecologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_400",
        "name": "Waldenström's macroglobulinemia",
        "common_name": "Waldenström's macroglobulinemia",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "C88.0",
            "hint": "Please consult a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_13",
        "name": "Warts",
        "common_name": "Warts",
        "sex_filter": "both",
        "categories": [
            "Dermatology"
        ],
        "prevalence": "common",
        "acuteness": "acute_potentially_chronic",
        "severity": "mild",
        "extras": {
            "icd10_code": "B07",
            "hint": "Please see a dermatologist."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_300",
        "name": "Water poisoning",
        "common_name": "Water poisoning",
        "sex_filter": "both",
        "categories": [
            "Cardiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E87.7",
            "hint": "Please consult your family doctor or an internist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_376",
        "name": "Wernicke's encephalopathy",
        "common_name": "Wernicke's encephalopathy",
        "sex_filter": "both",
        "categories": [
            "Neurology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E51.2",
            "hint": "You need to see a doctor immediately!"
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_580",
        "name": "West Nile Virus infection",
        "common_name": "West Nile Virus infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A92.3",
            "hint": "Please see a doctor immediately."
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_569",
        "name": "Whitlow",
        "common_name": "Whitlow",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "moderate",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "L03.0",
            "hint": "See a surgeon as soon as possible."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_205",
        "name": "Wilson's disease",
        "common_name": "Wilson's disease",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E83.0",
            "hint": "Please see a gastroenterologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_268",
        "name": "Wiskott-Aldrich syndrome",
        "common_name": "Wiskott-Aldrich syndrome",
        "sex_filter": "both",
        "categories": [
            "Hematology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "D82.0",
            "hint": "Please see a hematologist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_278",
        "name": "Withdrawal syndrome (sedatives)",
        "common_name": "Withdrawal syndrome (sedatives)",
        "sex_filter": "both",
        "categories": [
            "Toxicology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic",
        "severity": "severe",
        "extras": {
            "icd10_code": "F13.3",
            "hint": "Please consult a psychologist or psychiatrist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_961",
        "name": "Wound problems",
        "common_name": "Wound problems",
        "sex_filter": "both",
        "categories": [
            "Surgery"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "O86.0, R58, T79.3, T81.3, T81.4",
            "hint": "Please consult your family doctor or a general surgeon."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_1043",
        "name": "Wrist and hand contusion",
        "common_name": "Wrist and hand contusion",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "S60.2",
            "hint": "Please try available self care measures, if your symptoms doesnt subside in 24-48 hours please visit your family doctor."
        },
        "triage_level": "self_care"
    },
    {
        "id": "c_1027",
        "name": "Wrist dislocation",
        "common_name": "Dislocated wrist",
        "sex_filter": "both",
        "categories": [
            "Traumatology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "moderate",
        "extras": {
            "icd10_code": "S63.0",
            "hint": "You should go to a trauma center."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_244",
        "name": "Yellow fever",
        "common_name": "Yellow fever",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "severe",
        "extras": {
            "icd10_code": "A95",
            "hint": "See an infectious disease specialist as soon as possible!"
        },
        "triage_level": "emergency"
    },
    {
        "id": "c_906",
        "name": "Zika virus infection",
        "common_name": "Zika virus infection",
        "sex_filter": "both",
        "categories": [
            "Infectiology"
        ],
        "prevalence": "very_rare",
        "acuteness": "acute",
        "severity": "mild",
        "extras": {
            "icd10_code": "A92.5",
            "hint": "See your family doctor, and you may also need to consult an infectious disease specialist."
        },
        "triage_level": "consultation"
    },
    {
        "id": "c_213",
        "name": "Zollinger-Ellison syndrome",
        "common_name": "Zollinger-Ellison syndrome",
        "sex_filter": "both",
        "categories": [
            "Gastroenterology"
        ],
        "prevalence": "very_rare",
        "acuteness": "chronic_with_exacerbations",
        "severity": "moderate",
        "extras": {
            "icd10_code": "E16.4",
            "hint": "You should see your family doctor or a gastroenterologist as soon as possible."
        },
        "triage_level": "consultation"
    }
];

export default condition;